'use client';

import {
  forwardRef,
  InputHTMLAttributes,
  useId,
} from 'react';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          className={`
            w-full
            rounded-lg
            border
            px-3
            py-2.5
            text-sm
            outline-none
            transition-colors
            duration-200
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-blue-500
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            ${
              error
                ? 'border-red-500'
                : 'border-gray-300'
            }
            ${className}
          `}
          {...props}
        />

        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="mt-1 text-xs text-gray-500"
          >
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-xs text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';