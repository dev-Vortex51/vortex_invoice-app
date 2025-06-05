import { useState } from "react";
import { useInvoice } from "../hooks/useInvoice";
import Button from "./Button";
import Filter from "./Filter";
import CreateInvoice from "./CreateInvoice";

const InvoiceHeader = () => {
  const { invoices } = useInvoice();
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);

  const handleOpenInvoice = () => setShowCreateInvoice(true);
  const handleCloseInvoice = () => setShowCreateInvoice(false);

  return (
    <>
      <header className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
        {/* Title and Subtext */}
        <div className="flex flex-col">
          <h1 className="text-[24px] sm:text-[36px] font-bold tracking-[-1px] dark:text-white text-[#0C0E16]">
            Invoices
          </h1>
          {(invoices?.length ?? 0) > 0 ? (
            <>
              <p className="hidden lg:block text-sm text-06 dark:text-white">
                There are {invoices?.length} total invoices
              </p>
              <p className="block lg:hidden text-sm text-06 dark:text-white">
                {invoices?.length} invoices
              </p>
            </>
          ) : (
            <p className="text-sm text-06 dark:text-white">No invoices</p>
          )}
        </div>

        {/* Filter and New Invoice Button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <Filter />
          <Button size="md" variant="paid" onClick={handleOpenInvoice}>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <img src="/plus.svg" alt="Plus" />
              </div>
              <span className="hidden md:block">New Invoice</span>
              <span className="md:hidden block">New</span>
            </div>
          </Button>
        </div>
      </header>

      {showCreateInvoice && <CreateInvoice onClose={handleCloseInvoice} />}
    </>
  );
};

export default InvoiceHeader;
