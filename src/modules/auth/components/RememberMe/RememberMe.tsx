"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface RememberMeProps {
  register: UseFormRegisterReturn;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default function RememberMe({
  register,
  label = "Remember me",
  disabled = false,
  className = "",
}: RememberMeProps) {
  return (
    <label
      className={`flex items-center gap-3 cursor-pointer select-none ${className}`}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        {...register}
      />

      <span className="text-sm text-gray-700">
        {label}
      </span>
    </label>
  );
}