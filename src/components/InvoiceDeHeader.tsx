import StatusLabel from "./StatusLabel";
import DetailActions from "./DetailActions";

const InvoiceDeHeader = ({
  status,
}: {
  status: "paid" | "pending" | "draft";
}) => {
  return (
    <header className="flex gap-3 justify-between md:justify-start items-center rounded-[8px] h-[91px] p-[24px] bg-white dark:bg-03">
      <div className="text-06">Status</div>
      <div className="md:flex-1">
        <StatusLabel status={status} color={status} />
      </div>
      <div className="hidden md:block">
        <DetailActions />
      </div>
    </header>
  );
};

export default InvoiceDeHeader;
