import { formatToPound } from "../utils/helpers";

const InvoiceItems = ({ items, total }: { items: any[]; total: number }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 bg-17 dark:bg-04 p-[32px] rounded-tr-[8px] rounded-tl-[8px]">
        {/* Mobile layout */}
        {items.map((item, index) => (
          <div key={index} className="md:hidden">
            <div className="flex items-center justify-between">
              <p
                className="font-bold text-04 dark:text-white text-[15px]
            leading-[15px] tracking-[-.25px]"
              >
                {item.name}
              </p>
              <p className="font-bold text-04 dark:text-white text-[15px] leading-[15px] tracking-[-.25px] ">
                {formatToPound(item.total)}
              </p>
            </div>
            <h1 className="font-bold text-[15px] leading-[15px] mt-3 tracking-[-.25px] text-07 md:hidden">
              {item.quantity} <span>x</span> {formatToPound(item.price)}
            </h1>
          </div>
        ))}

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto] gap-10">
          <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
            Item Name
          </p>
          <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
            QTY.
          </p>
          <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
            Price
          </p>
          <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px]">
            Total
          </p>
        </div>

        {items.map((item, index) => (
          <div
            key={index}
            className="hidden md:grid grid-cols-[1fr_auto_1fr_auto] gap-10"
          >
            <p className="font-bold text-04 dark:text-white text-[15px] leading-[15px] tracking-[-.25px] ">
              {item.name}
            </p>
            <p className="font-bold text-04 dark:text-white text-[15px] leading-[15px] tracking-[-.25px] ">
              {item.quantity}
            </p>
            <p className="font-bold text-04 dark:text-white text-[15px] leading-[15px] tracking-[-.25px] ">
              {formatToPound(item.price)}
            </p>
            <p className="ont-bold text-04 dark:text-white text-[15px] leading-[15px] tracking-[-.25px] ">
              {formatToPound(item.total)}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-15 dark:bg-08 flex items-center justify-between text-white rounded-br-[8px] rounded-bl-[8px] py-0 px-[32px] h-[80px]">
        <p className="font-medium text-[13px] leading-[18px]  tracking-[-.1px]">
          Amount Due
        </p>
        <h1 className="font-bold text-[24px]  leading-[32px] tracking-[-.5px]">
          {formatToPound(total)}
        </h1>
      </div>
    </div>
  );
};

export default InvoiceItems;
