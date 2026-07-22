"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/shared/components/ui/Button";
import { OTPInput } from "../OTPInput";

export interface VerifyEmailFormValues {
  otp: string;
}

interface VerifyEmailFormProps {
  isLoading?: boolean;
  email?: string;
  onSubmit: (values: VerifyEmailFormValues) => void;
}

export default function VerifyEmailForm({
  isLoading = false,
  email,
  onSubmit,
}: VerifyEmailFormProps) {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyEmailFormValues>({
    defaultValues: {
      otp: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      {email && (
        <p className="text-center text-sm text-gray-600">
          Enter the verification code sent to
          <br />
          <span className="font-medium">{email}</span>
        </p>
      )}

      <OTPInput
        length={6}
        error={errors.otp?.message}
        onChange={(value) =>
          setValue("otp", value, {
            shouldValidate: true,
          })
        }
      />

      <Button
        type="submit"
        className="w-full"
        loading={isLoading}
      >
        Verify Email
      </Button>
    </form>
  );
}