import { MdOutlineChevronRight } from "react-icons/md";
import StatusLabel from "./StatusLabel";
import { formatDate, formatToPound } from "../utils/helpers";
import { Link } from "react-router-dom";

interface Invoice {
  $id: string;
  clientName: string;
  paymentDue: string | Date;
  total: number;
  status: string;
}

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  return (
    <Link
      to={`/invoice-app/invoiceDetails/${invoice.$id}`}
      className="
        flex items-center justify-between bg-white dark:bg-03 h-[72px] rounded-lg shadow-[0_10px_10px_-10px_#48549f1a] px-6 cursor-pointer
        max-md:grid max-md:grid-cols-2 max-md:grid-rows-3 max-md:h-auto max-md:p-6 max-md:gap-[9px]
        max-md:[grid-template-areas:'id_client'_'due_status'_'total_status']
      "
    >
      <h2 className=" text-04 [grid-area:id] text-left max-md:self-start font-bold text-[15px] leading-[15px] tracking-[-0.25px]  dark:text-white">
        <span className="text-07">#</span>
        {invoice.$id}
      </h2>

      <p className="text-07 [grid-area:client] text-right max-md:self-end    font-medium text-[13px] leading-[15px] tracking-[-0.1px]  ">
        {invoice.clientName}
      </p>

      <p className="text-07 [grid-area:due] text-left max-md:self-start   font-medium text-[13px] leading-[15px] tracking-[-0.1px] ">
        Due{" "}
        {formatDate(
          typeof invoice.paymentDue === "string"
            ? invoice.paymentDue
            : invoice.paymentDue.toISOString()
        )}
      </p>

      <h1 className="dark:text-white text-04 text-lg [grid-area:total] text-left max-md:self-start font-bold text-[15px] leading-[24px] tracking-[-0.25px]">
        {formatToPound(invoice.total)}
      </h1>

      <div
        className="
          [grid-area:status]
          flex items-center
          max-md:flex-col max-md:items-end max-md:row-span-2 max-md:justify-center max-md:gap-2
        "
      >
        <StatusLabel
          status={invoice.status}
          color={invoice.status.toLowerCase() as "pending" | "paid" | "draft"}
        />

        <span className="ml-2 text-2xl text-02">
          <MdOutlineChevronRight className="hidden md:block" />
        </span>
      </div>
    </Link>
  );
};

export default InvoiceCard;
