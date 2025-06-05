import type { SelectOption } from "./Select";
import Select from "./Select";

function PaymentSelect({
  label = "Payment Terms",
  value,
  onChange,
  error,
  required = false,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) {
  const paymentOptions: SelectOption[] = [
    { value: "net-1", label: "Net 1 day" },
    { value: "net-7", label: "Net 7 days" },
    { value: "net-14", label: "Net 14 days" },
    { value: "net-30", label: "Net 30 days" },
  ];

  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
      options={paymentOptions}
      required={required}
    />
  );
}

export default PaymentSelect;
