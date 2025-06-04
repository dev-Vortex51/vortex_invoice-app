import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "edit" | "delete" | "paid" | "custom";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  bgColor?: string; // For custom variant only
  textColor?: string; // For custom variant only
}

const sizeClasses = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses = {
  edit: "bg-[#f9fafe] dark:bg-[#252945] text-06 font-semibold ",
  delete: "bg-09 text-white font-semibold ",
  paid: "bg-02 text-white font-semibold ",
  custom: "",
};

const Button = ({
  children,
  size = "md",
  variant = "edit",
  onClick,
  disabled = false,
  className = "",
  bgColor,
  textColor,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded-full transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variant !== "custom" && variantClasses[variant],
        variant === "custom" && bgColor,
        variant === "custom" && textColor,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
