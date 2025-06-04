import Container from "./Container";
import BackButton from "./BackButton";
import InvoiceDeHeader from "./InvoiceDeHeader";
import SenderDetails from "./SenderDetails";
import ClientDetails from "./ClientDetails";
import InvoiceItems from "./InvoiceItems";
import { useParams } from "react-router-dom";
import { useIndividualInvoice } from "../hooks/useIndividualInvoice";
import DetailActions from "./DetailActions";

const InvoiceDetailPage = () => {
  const { invoiceId } = useParams<{ invoiceId: string }>();
  const { invoice, isPending } = useIndividualInvoice(String(invoiceId));

  if (isPending) {
    return (
      <Container>
        <BackButton />
        <div className="text-center mt-10 text-gray-600 dark:text-gray-300">
          Loading invoice details...
        </div>
      </Container>
    );
  }

  if (!invoice) {
    return (
      <Container>
        <BackButton />
        <div className="text-center mt-10 text-red-500 dark:text-red-400">
          Invoice not found.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton />
      <InvoiceDeHeader
        status={invoice.status.toLowerCase() as "pending" | "draft" | "paid"}
      />
      <main className="mt-6 flex-1 bg-white dark:bg-03 flex flex-col p-6 gap-[21px]">
        <SenderDetails
          id={invoiceId!}
          description={invoice.description}
          senderAddress={invoice.senderAddress}
        />
        <ClientDetails invoice={invoice} />
        <InvoiceItems
          items={
            typeof invoice.items === "string"
              ? JSON.parse(invoice.items)
              : invoice.items
          }
          total={invoice.total}
        />
        <div className="flex md:hidden justify-center ">
          <DetailActions />
        </div>
      </main>
    </Container>
  );
};

export default InvoiceDetailPage;
