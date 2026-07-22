'use client';

import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>,
    'children'
  > {
  options: RadioOption[];
  label?: string;
  helperText?: string;
  error?: string;
}

export const RadioGroup = forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  RadioGroupProps
>(
  (
    {
      options,
      label,
      helperText,
      error,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <p className="mb-3 text-sm font-medium text-gray-700">
            {label}
          </p>
        )}

        <RadixRadioGroup.Root
          ref={ref}
          className={`space-y-3 ${className}`}
          {...props}
        >
          {options.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3"
            >
              <RadixRadioGroup.Item
                value={option.value}
                disabled={option.disabled}
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-blue-500
                  disabled:opacity-50
                "
              >
                <RadixRadioGroup.Indicator
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-blue-600
                  "
                />
              </RadixRadioGroup.Item>

              <span className="text-sm text-gray-700">
                {option.label}
              </span>
            </label>
          ))}
        </RadixRadioGroup.Root>

        {helperText && !error && (
          <p className="mt-2 text-xs text-gray-500">
            {helperText}
          </p>
        )}

        {error && (
          <p className="mt-2 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';