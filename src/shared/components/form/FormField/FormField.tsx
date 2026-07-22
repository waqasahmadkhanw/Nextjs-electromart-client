'use client';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  render: (field: {
    value: unknown;
    onChange: (...event: unknown[]) => void;
    onBlur: () => void;
    name: string;
    ref: React.Ref<unknown>;
  }) => React.ReactNode;
}

export function FormField<T extends FieldValues>({
  name,
  control,
  render,
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => render(field)}
    />
  );
}