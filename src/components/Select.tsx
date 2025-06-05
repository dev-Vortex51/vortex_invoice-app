import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

type SelectProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  error?: string;
};

export default function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowDown":
          event.preventDefault();
          break;
        case "ArrowUp":
          event.preventDefault();
          break;
        case "Enter":
          event.preventDefault();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleOptionSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : "";

  return (
    <div className="w-full" ref={containerRef}>
      <label className="text-sm text-slate-300 mb-2 flex items-center justify-between">
        {label}
        {error && <span className="text-red-400 ml-1 text-xs">{error}</span>}
      </label>

      <div className="relative">
        <div
          className={`w-full h-[48px] rounded-[4px]
            border ${
              error
                ? "border-red-500"
                : "border-[#DFE3FA] dark:border-[#252945]"
            }
            px-[20px]
            text-[15px] leading-[15px] tracking-[-0.25px]
            font-bold
            text-[#0C0E16] dark:text-white
            bg-white dark:bg-[#1e2139]
            focus:outline-none focus:border-02 transition-colors
            cursor-pointer flex items-center justify-between`}
          onClick={() => setIsOpen(!isOpen)}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          tabIndex={0}
        >
          <span className={displayValue ? "" : "text-slate-400"}>
            {displayValue || placeholder}
          </span>
          <ChevronDown
            size={16}
            className={`text-slate-400 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white dark:bg-[#1e2139] border border-[#DFE3FA] dark:border-[#252945] rounded-[4px] shadow-lg max-h-60 overflow-y-auto">
            <div className="py-1" role="listbox">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`
                    px-[20px] py-3 cursor-pointer flex items-center justify-between
                    text-[15px] leading-[15px] tracking-[-0.25px] font-bold
                    transition-colors
                    ${
                      value === option.value
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-[#0C0E16] dark:text-white hover:bg-slate-50 dark:hover:bg-[#252945]"
                    }
                  `}
                  onClick={() => handleOptionSelect(option.value)}
                  role="option"
                  aria-selected={value === option.value}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <Check
                      size={16}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// // Payment Terms Select Component
// function PaymentTermsSelect({
//   label = "Payment Terms",
//   value,
//   onChange,
//   error,
//   required = false,
// }: {
//   label?: string;
//   value: string;
//   onChange: (value: string) => void;
//   error?: string;
//   required?: boolean;
// }) {
//   const paymentOptions: SelectOption[] = [
//     { value: "net-1", label: "Net 1 day" },
//     { value: "net-7", label: "Net 7 days" },
//     { value: "net-14", label: "Net 14 days" },
//     { value: "net-30", label: "Net 30 days" },
//   ];

//   return (
//     <Select
//       label={label}
//       value={value}
//       onChange={onChange}
//       options={paymentOptions}
//       placeholder="Select payment terms..."
//       required={required}
//       error={error}
//     />
//   );
// }
