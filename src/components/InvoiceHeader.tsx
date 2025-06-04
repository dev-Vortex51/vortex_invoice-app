import { useInvoice } from "../hooks/useInvoice";
import Button from "./Button";
import Filter from "./Filter";

const InvoiceHeader = () => {
  const { invoices } = useInvoice();
  return (
    <header className="flex w-full justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-04 font-bold text-[36px] tracking-[-1.13px] dark:text-white">
          Invoices
        </h1>
        {(invoices?.length ?? 0) > 0 ? (
          <>
            <p className=" hidden lg:block font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-06 dark:text-white">
              There are {invoices?.length} total invoices
            </p>
            <p className="block lg:hidden font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-06 dark:text-white">
              {invoices?.length} invoices
            </p>
          </>
        ) : (
          <p className=" font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-06 dark:text-white">
            No invoices
          </p>
        )}
      </div>
      <div className=" flex items-center gap-5">
        <Filter />
        <Button size="md" variant="paid">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src="/plus.svg" alt="" />
            </div>

            <p className="hidden md:block">New Invoice</p>
            <p className="md:hidden block">New</p>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default InvoiceHeader;
