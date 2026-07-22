'use client';

import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      helperText,
      error,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className={`flex cursor-pointer items-start gap-3 ${
            disabled ? 'cursor-not-allowed opacity-60' : ''
          }`}
        >
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={`
              mt-1
              h-4
              w-4
              rounded
              border-gray-300
              text-blue-600
              focus:ring-2
              focus:ring-blue-500
              ${className}
            `}
            {...props}
          />

          <div>
            {label && (
              <span className="block text-sm font-medium text-gray-700">
                {label}
              </span>
            )}

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
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';