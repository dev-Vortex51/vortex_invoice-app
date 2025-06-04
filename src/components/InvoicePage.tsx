import { useInvoice } from "../hooks/useInvoice";
import Container from "./Container";
import EmptyInvoice from "./EmptyInvoice";
import InvoiceCard from "./InvoiceCard";
import InvoiceHeader from "./InvoiceHeader";

export default function InvoicePage() {
  const { invoices, isPending } = useInvoice();

  return (
    <Container>
      <InvoiceHeader />

      {isPending ? (
        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Loading invoices...
        </p>
      ) : invoices?.length === 0 ? (
        <EmptyInvoice />
      ) : (
        <div className="flex flex-col mt-10 gap-5">
          {invoices?.map((invoice) => (
            <InvoiceCard key={invoice.$id} invoice={invoice} />
          ))}
        </div>
      )}
    </Container>
  );
}
