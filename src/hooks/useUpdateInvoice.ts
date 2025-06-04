import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveInvoice } from "../services/api";
import { showToast } from "../utils/helpers";

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  const { mutate: updateInvoice, isPending } = useMutation({
    mutationFn: ({
      invoiceData,
      invoiceId,
    }: {
      invoiceData: object;
      invoiceId: string;
    }) => saveInvoice(invoiceData, invoiceId),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });

      showToast(`Invoice ${data?.id} updated successfully`, "success");
    },
  });

  return { updateInvoice, isPending };
};
