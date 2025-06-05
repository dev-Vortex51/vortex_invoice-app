type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  error?: string;
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
  error,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label className="text-sm text-slate-300 mb-2 flex items-center justify-between">
        {label}
        {error && <span className="text-red-400 ml-1 text-xs">{error}</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-[48px] rounded-[4px]
    border border-[#DFE3FA] dark:border-[#252945]
    px-[20px]
    text-[15px] leading-[15px] tracking-[-0.25px]
    font-bold
    text-[#0C0E16] dark:text-white
    bg-white dark:bg-[#1e2139]  ${
      !error ? "border-red-500" : "border-[#252945]"
    } rounded-[4px]  focus:outline-none focus:border-02 transition-colors`}
      />
    </div>
  );
}
