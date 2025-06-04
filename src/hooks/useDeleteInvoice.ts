import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInvoice } from "../services/api";
import { showToast } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

export const useDeleteInvoice = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteInvoiceFn, isPending } = useMutation({
    mutationFn: (invoiceId) => deleteInvoice(invoiceId!),
    onSettled: (data) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      showToast(`Invoice  deleted successfully`, "success");
      navigate("/invoice-app");
    },
  });

  return { deleteInvoiceFn, isPending };
};
