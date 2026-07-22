'use client';

import {
  forwardRef,
  TextareaHTMLAttributes,
  useId,
} from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      id,
      label,
      helperText,
      error,
      className = '',
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          className={`
            w-full
            rounded-lg
            border
            border-gray-300
            bg-white
            px-3
            py-2.5
            text-sm
            outline-none
            transition-colors
            resize-y
            placeholder:text-gray-400
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />

        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className="mt-1 text-xs text-gray-500"
          >
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1 text-xs text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';