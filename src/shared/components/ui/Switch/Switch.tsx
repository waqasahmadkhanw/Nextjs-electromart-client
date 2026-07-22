'use client';

import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
    const switchId = id ?? generatedId;

    return (
      <div className="w-full">
        <label
          htmlFor={switchId}
          className={`flex items-center justify-between gap-4 ${
            disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
          }`}
        >
          <div>
            {label && (
              <span className="block text-sm font-medium text-gray-900">
                {label}
              </span>
            )}

            {helperText && !error && (
              <p
                id={`${switchId}-helper`}
                className="mt-1 text-xs text-gray-500"
              >
                {helperText}
              </p>
            )}

            {error && (
              <p
                id={`${switchId}-error`}
                className="mt-1 text-xs text-red-600"
              >
                {error}
              </p>
            )}
          </div>

          <div className="relative inline-flex">
            <input
              ref={ref}
              id={switchId}
              type="checkbox"
              role="switch"
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={
                error
                  ? `${switchId}-error`
                  : helperText
                  ? `${switchId}-helper`
                  : undefined
              }
              className="peer sr-only"
              {...props}
            />

            <div
              className="
                h-6
                w-11
                rounded-full
                bg-gray-300
                transition-colors
                duration-200
                peer-checked:bg-blue-600
                peer-focus:ring-2
                peer-focus:ring-blue-500
                peer-disabled:opacity-50
                peer-disabled:cursor-not-allowed
              "
            />

            <div
              className="
                absolute
                left-0.5
                top-0.5
                h-5
                w-5
                rounded-full
                bg-white
                shadow
                transition-transform
                duration-200
                peer-checked:translate-x-5
              "
            />
          </div>
        </label>
      </div>
    );
  }
);

Switch.displayName = 'Switch';