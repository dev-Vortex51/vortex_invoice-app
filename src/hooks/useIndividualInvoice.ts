import { useQuery } from "@tanstack/react-query";
import { getInvoiceById } from "../services/api";

export const useIndividualInvoice = (id: string) => {
  const {
    data: invoice,
    isPending,
    error,
  } = useQuery({
    queryKey: ["invoice", id],
    queryFn: () => getInvoiceById(id),
  });

  return {
    invoice,
    isPending,
    error,
  };
};
