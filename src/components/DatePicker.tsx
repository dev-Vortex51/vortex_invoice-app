import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

type DatePickerProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  dateFormat?: "MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD";
};

export default function DatePicker({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  dateFormat = "MM/DD/YYYY",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  const parseDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;

    let parts: string[];
    let day: number, month: number, year: number;

    switch (dateFormat) {
      case "MM/DD/YYYY":
        parts = dateStr.split("/");
        if (parts.length === 3) {
          month = parseInt(parts[0]) - 1;
          day = parseInt(parts[1]);
          year = parseInt(parts[2]);
          return new Date(year, month, day);
        }
        break;
      case "DD/MM/YYYY":
        parts = dateStr.split("/");
        if (parts.length === 3) {
          day = parseInt(parts[0]);
          month = parseInt(parts[1]) - 1;
          year = parseInt(parts[2]);
          return new Date(year, month, day);
        }
        break;
      case "YYYY-MM-DD":
        parts = dateStr.split("-");
        if (parts.length === 3) {
          year = parseInt(parts[0]);
          month = parseInt(parts[1]) - 1;
          day = parseInt(parts[2]);
          return new Date(year, month, day);
        }
        break;
    }
    return null;
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    switch (dateFormat) {
      case "MM/DD/YYYY":
        return `${month}/${day}/${year}`;
      case "DD/MM/YYYY":
        return `${day}/${month}/${year}`;
      case "YYYY-MM-DD":
        return `${year}-${month}-${day}`;
      default:
        return `${month}/${day}/${year}`;
    }
  };

  const selectedDate = parseDate(value);

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

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDateObj = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDateObj));
      currentDateObj.setDate(currentDateObj.getDate() + 1);
    }

    return days;
  };

  const handleDateSelect = (date: Date) => {
    onChange(formatDate(date));
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full " ref={containerRef}>
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
          tabIndex={0}
        >
          <span className={value ? "" : "text-slate-400"}>
            {value || placeholder}
          </span>
          <Calendar size={16} className="text-slate-400" />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white dark:bg-[#1e2139] border border-[#DFE3FA] dark:border-[#252945] rounded-[4px] shadow-lg">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#DFE3FA] dark:border-[#252945]">
              <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-slate-100 dark:hover:bg-[#252945] rounded transition-colors"
              >
                <ChevronLeft
                  size={16}
                  className="text-[#0C0E16] dark:text-white"
                />
              </button>

              <h3 className="text-[15px] font-bold text-[#0C0E16] dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>

              <button
                onClick={handleNextMonth}
                className="p-1 hover:bg-slate-100 dark:hover:bg-[#252945] rounded transition-colors"
              >
                <ChevronRight
                  size={16}
                  className="text-[#0C0E16] dark:text-white"
                />
              </button>
            </div>

            {/* Week Headers */}
            <div className="grid grid-cols-7 gap-0 p-2">
              {weekDays.map((day) => (
                <div key={day} className="p-2 text-center">
                  <span className="text-xs font-medium text-slate-400">
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-0 p-2">
              {generateCalendarDays().map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`
                    p-2 text-center text-sm transition-all hover:bg-slate-100 dark:hover:bg-[#252945] rounded
                    ${
                      isSelected(date)
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : isToday(date)
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                        : isCurrentMonth(date)
                        ? "text-[#0C0E16] dark:text-white"
                        : "text-slate-400"
                    }
                  `}
                >
                  {date.getDate()}
                </button>
              ))}
            </div>

            {/* Today Button */}
            <div className="p-2 border-t border-[#DFE3FA] dark:border-[#252945]">
              <button
                onClick={() => handleDateSelect(new Date())}
                className="w-full py-2 text-sm text-blue-500 hover:bg-slate-100 dark:hover:bg-[#252945] rounded transition-colors"
              >
                Today
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
