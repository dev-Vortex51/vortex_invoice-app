import { IoCheckmarkDone } from "react-icons/io5";
import Button from "./Button";
import { Modal } from "./Modal";
import { useParams } from "react-router-dom";
import { useDeleteInvoice } from "../hooks/useDeleteInvoice";
import { useIndividualInvoice } from "../hooks/useIndividualInvoice";
import { useMarkInvoiceAsPaid } from "../hooks/useMarkInvoiceAsPaid";

const DetailActions = () => {
  const { invoiceId: id } = useParams<{ invoiceId: string }>();
  const { deleteInvoiceFn } = useDeleteInvoice();
  const { invoice } = useIndividualInvoice(String(id));
  const { markAsPaid } = useMarkInvoiceAsPaid();

  const handleDelete = () => {
    // @ts-ignore
    deleteInvoiceFn(id);
  };
  const handleMarkAsPaid = () => {
    if (!invoice || invoice.status === "paid") return;

    markAsPaid(invoice.$id);
  };

  return (
    <div className="flex items-center gap-2">
      <Button size="md" variant="edit">
        Edit
      </Button>

      <Modal>
        <Modal.Trigger>
          <Button size="md" variant="delete">
            Delete
          </Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Title>Confirm Deletion</Modal.Title>
          <Modal.Description>
            Are you sure you want to delete invoice <strong>#{id}</strong>? This
            action cannot be undone.
          </Modal.Description>
          <div className="flex justify-end gap-4">
            <Modal.Close>
              <button className="h-[48px] border-0 rounded-[24px] py-[16px] px-[24px] cursor-pointer bg-17 text-07 flex items-center justify-center">
                Cancel
              </button>
            </Modal.Close>
            <Modal.Close>
              <button
                className="h-[48px] border-0 rounded-[24px] py-[16px] px-[24px] cursor-pointer bg-09 text-white flex items-center justify-center"
                onClick={handleDelete}
              >
                Delete
              </button>
            </Modal.Close>
          </div>
        </Modal.Content>
      </Modal>

      <Modal>
        <Modal.Trigger>
          <Button size="md" variant="paid">
            <p className="hidden md:block">Mask as Paid</p>
            <p className="block md:hidden">
              <IoCheckmarkDone />
            </p>
          </Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Title>Confirm Mask</Modal.Title>
          <Modal.Description>
            Are you sure you want to mask the status of invoice{" "}
            <strong>#{id}</strong> to paid?
          </Modal.Description>
          <div className="flex justify-end gap-4">
            <Modal.Close>
              <button className="h-[48px] border-0 rounded-[24px] py-[16px] px-[24px] cursor-pointer bg-17 text-07 flex items-center justify-center">
                Cancel
              </button>
            </Modal.Close>
            <Modal.Close>
              <button
                className="h-[48px] border-0 rounded-[24px] py-[16px] px-[24px] cursor-pointer bg-09 text-white flex items-center justify-center"
                onClick={handleMarkAsPaid}
              >
                Confirm
              </button>
            </Modal.Close>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default DetailActions;
