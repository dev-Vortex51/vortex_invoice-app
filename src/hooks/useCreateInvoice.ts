import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveInvoice } from "../services/api";
import { showToast } from "../utils/helpers";

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  const { mutate: createInvoice, isPending } = useMutation({
    mutationFn: (invoiceData: object) => saveInvoice(invoiceData),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });

      showToast(`Invoice ${data?.id} created successfully`, "success");
    },
  });

  return { createInvoice, isPending };
};
