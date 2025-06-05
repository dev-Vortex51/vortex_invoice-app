import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../utils/helpers";
import { databases } from "../lib/appwrite";

export const useMarkInvoiceAsPaid = () => {
  const queryClient = useQueryClient();

  const { mutate: markAsPaid } = useMutation({
    mutationFn: async (invoiceId: string) => {
      return await databases.updateDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID!,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID!,
        invoiceId,
        { status: "Paid" }
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
      showToast("Invoice marked as paid", "success");
    },
    onError: () => {
      showToast("Failed to mark invoice as paid", "error");
    },
  });

  return { markAsPaid };
};
