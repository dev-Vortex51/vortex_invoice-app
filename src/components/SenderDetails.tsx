interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

const SenderDetails = ({
  id,
  description,
  senderAddress,
}: {
  id: string;
  description?: string;
  senderAddress?: string;
}) => {
  const address: Address | null =
    senderAddress && typeof senderAddress === "string"
      ? JSON.parse(senderAddress)
      : null;

  return (
    <div className="flex flex-col gap-6 md:flex-row md:justify-between">
      <div className="flex flex-col gap-5">
        <h2 className="text-04 text-left max-md:self-start font-bold text-[15px] leading-[15px] tracking-[-0.25px] dark:text-white">
          <span className="text-07">#</span>
          {id}
        </h2>
        <p className="font-medium text-07 leading-[15px] tracking-[-.1px] text-[13px] ">
          {description}
        </p>
      </div>
      <div className="flex flex-col items-start md:items-end font-medium text-[13px] leading-[18px] tracking-[-.1px] text-07">
        <p>{address?.street}</p>
        <p>{address?.city}</p>
        <p>{address?.postCode}</p>
        <p>{address?.country}</p>
      </div>
    </div>
  );
};

export default SenderDetails;
