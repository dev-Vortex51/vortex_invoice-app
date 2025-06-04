import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../services/api";

export const useInvoice = () => {
  const {
    data: invoices,
    isPending,
    error,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  return {
    invoices,
    isPending,
    error,
  };
};
