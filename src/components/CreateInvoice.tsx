import { useState } from "react";
import { createPortal } from "react-dom";
import InputField from "./InputField";
import SectionWrapper from "./SectionWrapper";
import { useClickOutside } from "../hooks/useClickOutside";
import DatePicker from "./DatePicker";
import PaymentSelect from "./PaymentSelect";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

type Props = {
  onClose: () => void;
};

export default function CreateInvoice({ onClose }: Props) {
  const filterRef = useClickOutside<HTMLDivElement>(() => onClose());
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    paymentDue: "",
    paymentTerm: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center md:justify-start overflow-y-auto">
      <div
        ref={filterRef}
        className="bg-white dark:bg-[#141625] w-full md:max-w-xl md:ml-[6rem] h-full md:h-screen md:rounded-tr-[30px] flex flex-col pt-8 md:pt-24 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6 px-4 md:px-10">
          <h2 className="font-bold text-2xl leading-[32px] tracking-tight text-[#0c0e16] dark:text-white">
            New Invoice
          </h2>

          <button
            onClick={onClose}
            className="md:hidden text-gray-500 hover:text-black dark:hover:text-white text-2xl font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 px-4 pb-6 md:px-10 flex-1 overflow-y-auto">
          <SectionWrapper title="Bill From">
            <InputField
              label="Street Address"
              value={formData.streetAddress}
              onChange={(value) => handleInputChange("streetAddress", value)}
              error={!formData.streetAddress ? "Can't be empty" : undefined}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <InputField
                label="City"
                value={formData.city}
                onChange={(value) => handleInputChange("city", value)}
                error={!formData.city ? "Can't be empty" : undefined}
              />
              <InputField
                label="Post Code"
                value={formData.postCode}
                onChange={(value) => handleInputChange("postCode", value)}
                error={!formData.postCode ? "Can't be empty" : undefined}
              />
              <InputField
                label="Country"
                value={formData.country}
                onChange={(value) => handleInputChange("country", value)}
                error={!formData.country ? "Can't be empty" : undefined}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper title="Bill To">
            <InputField
              label="Client's Name"
              value={formData.clientName}
              onChange={(value) => handleInputChange("clientName", value)}
              error={!formData.clientName ? "Can't be empty" : undefined}
            />
            <InputField
              label="Client's Email"
              value={formData.clientEmail}
              onChange={(value) => handleInputChange("clientEmail", value)}
              type="email"
              error={
                !formData.clientEmail
                  ? "Can't be empty"
                  : !isValidEmail(formData.clientEmail)
                  ? "Invalid email format"
                  : undefined
              }
            />
            <InputField
              label="Street Address"
              value={formData.streetAddress}
              onChange={(value) => handleInputChange("streetAddress", value)}
              type="text"
              error={!formData.streetAddress ? "Can't be empty" : undefined}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <InputField
                label="City"
                value={formData.city}
                onChange={(value) => handleInputChange("city", value)}
                error={!formData.city ? "Can't be empty" : undefined}
              />
              <InputField
                label="Post Code"
                value={formData.postCode}
                onChange={(value) => handleInputChange("postCode", value)}
                error={!formData.postCode ? "Can't be empty" : undefined}
              />
              <InputField
                label="Country"
                value={formData.country}
                onChange={(value) => handleInputChange("country", value)}
                error={!formData.country ? "Can't be empty" : undefined}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <DatePicker
                label="Issue Date"
                value={formData.paymentDue}
                onChange={(value) => handleInputChange("paymentDue", value)}
              />
              <PaymentSelect
                value={formData.paymentTerm}
                onChange={(value) => handleInputChange("paymentTerm", value)}
              />
            </div>
            <InputField
              label="Project Description"
              value={formData.description}
              onChange={(value) => handleInputChange("description", value)}
              error={!formData.description ? "Can't be empty" : undefined}
            />
          </SectionWrapper>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-[56px] py-6 md:py-[39px] bg-white dark:bg-[#1e2139] rounded-tr-2xl md:rounded-tr-[20px] dark:border-t dark:border-[#252945]">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Discard
          </button>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <button className="bg-slate-600 hover:bg-slate-500 px-6 py-2.5 rounded-full text-white font-medium transition-colors">
              Save as Draft
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-full text-white font-medium transition-colors">
              Save & Send
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
