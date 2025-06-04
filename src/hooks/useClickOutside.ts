import { useEffect, useRef } from "react";
import type { RefObject } from "react";

type Handler = () => void;

export const useClickOutside = <T extends HTMLElement>(
  handler: Handler
): RefObject<T> => {
  const ref = useRef<T>(null!);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);

  return ref;
};
