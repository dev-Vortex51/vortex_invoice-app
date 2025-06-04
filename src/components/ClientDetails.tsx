import { formatDate } from "../utils/helpers";

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

const ClientDetails = ({ invoice }: { invoice: any }) => {
  const address: Address | null =
    invoice?.clientAddress && typeof invoice.clientAddress === "string"
      ? JSON.parse(invoice.clientAddress)
      : null;

  return (
    <div className="grid grid-cols-[1fr_auto] md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
          Invoice Date
        </p>
        <h1 className="font-bold text-[15px] leading-[15px] tracking-[-.25px] text-04 dark:text-white transform translate-y-[0.09rem]">
          {formatDate(String(invoice?.$createdAt))}
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
          Bill To
        </p>
        <h1 className="font-bold text-[15px] leading-[15px] tracking-[-.25px] text-04 dark:text-white transform translate-y-[0.09rem]">
          {invoice?.clientName}
        </h1>
      </div>

      <div className="order-4 col-span-1 md:order-none flex flex-col gap-2">
        <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
          Sent to
        </p>
        <h1 className="font-bold text-[15px] leading-[15px] tracking-[-.25px] text-04 dark:text-white transform translate-y-[0.09rem] break-words">
          {invoice?.clientEmail}
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
          Payment Due
        </p>
        <h1 className="font-bold text-[15px] leading-[15px] tracking-[-.25px] text-04 dark:text-white transform translate-y-[0.09rem]">
          {formatDate(
            typeof invoice?.paymentDue === "string"
              ? invoice.paymentDue
              : invoice?.paymentDue?.toISOString()
          )}
        </h1>
      </div>

      <div className="flex flex-col items-start font-medium text-[13px] leading-[18px] tracking-[-.1px] text-07">
        <p>{address?.street}</p>
        <p>{address?.city}</p>
        <p>{address?.postCode}</p>
        <p>{address?.country}</p>
      </div>
    </div>
  );
};

export default ClientDetails;
