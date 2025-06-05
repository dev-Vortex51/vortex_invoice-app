import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className="relative" ref={filterRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden text-04 dark:text-white font-semibold   lg:flex cursor-pointer items-center gap-2 hover:opacity-80 transition-opacity"
      >
        Filter by status
        <span
          className={`text-01 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoChevronDownSharp />
        </span>
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-04 dark:text-white font-semibold  flex cursor-pointer items-center gap-2 hover:opacity-80 transition-opacity"
      >
        Filter
        <span
          className={`accent-02 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoChevronDownSharp />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-10 left-0 w-48 bg-white dark:bg-03 rounded-lg shadow-lg p-6 space-y-4 z-50">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              id="draft"
              className="w-4 h-4 rounded border-05 accent-02 focus:ring-01 cursor-pointer"
            />
            <span className="group-hover:text-07  text-04 dark:text-white font-semibold">
              Draft
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              id="pending"
              className="w-4 h-4 rounded border-05 accent-02 focus:ring-01 cursor-pointer"
            />
            <span className="group-hover:text-07 text-04 dark:text-white font-semibold">
              Pending
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              id="paid"
              className="w-4 h-4 rounded border-05 accent-02 focus:ring-01 cursor-pointer"
            />
            <span className="group-hover:text-07 text-04 dark:text-white font-semibold">
              Paid
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default Filter;
