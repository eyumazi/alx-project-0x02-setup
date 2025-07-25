import React from "react";
import type { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  size = "medium",
  shape = "rounded-md",
}) => {
  return (
    <div className="inline-block">
      <button
        type={type}
        onClick={onClick}
        className={`
          bg-gray-50 hover:bg-green-50
          text-gray-700 hover:text-green-700
          border border-gray-200 hover:border-green-300
          px-4 py-1.5
          rounded-full
          text-xs
          transition-colors duration-200 font-semibold
          ${size === "small" ? "text-xs" : size === "large" ? "text-lg" : "text-sm"}
          ${className}
          ${shape === "rounded-sm" ? "rounded-sm" : shape === "rounded-full" ? "rounded-full" : "rounded-md"}
        `}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
