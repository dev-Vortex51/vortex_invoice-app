const EmptyInvoice = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-12">
      <img src="/illustration-empty-Czz_H9Xz.svg" alt="" />
      <h1 className="font-bold text-[24px] dark:text-white tracking-[-0.75px] text-04">
        There is nothing here
      </h1>
      <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-06">
        Create an invoice by clicking the
        <br />
        <span className="font-bold">New Invoice</span>
        {""} button and get started
      </p>
    </div>
  );
};

export default EmptyInvoice;
