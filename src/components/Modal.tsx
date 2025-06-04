import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type ModalContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal compound components must be used inside <Modal>");
  }
  return context;
}

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Trigger = function Trigger({ children }: { children: React.ReactNode }) {
  const { openModal } = useModalContext();
  return <div onClick={openModal}>{children}</div>;
};

Modal.Content = function Content({ children }: { children: React.ReactNode }) {
  const { open, closeModal } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    const onClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open, closeModal]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full shadow-lg"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.Title = function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
      {children}
    </h2>
  );
};

Modal.Description = function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{children}</p>
  );
};

Modal.Close = function Close({ children }: { children: React.ReactNode }) {
  const { closeModal } = useModalContext();
  return <div onClick={closeModal}>{children}</div>;
};
