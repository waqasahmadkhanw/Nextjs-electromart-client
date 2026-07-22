"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/shared/components/ui/Input";
import { PasswordField } from "../PasswordField";
import { Button } from "@/shared/components/ui/Button";

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  isLoading?: boolean;
  onSubmit: (values: RegisterFormValues) => void;
}

export default function RegisterForm({
  isLoading = false,
  onSubmit,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <Input
        label="First Name"
        placeholder="Enter your first name"
        error={errors.firstName?.message}
        {...register("firstName", {
          required: "First name is required",
        })}
      />

      <Input
        label="Last Name"
        placeholder="Enter your last name"
        error={errors.lastName?.message}
        {...register("lastName", {
          required: "Last name is required",
        })}
      />

      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
        })}
      />

      <PasswordField
        label="Password"
        placeholder="Create a password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />

      <PasswordField
        label="Confirm Password"
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Confirm password is required",
        })}
      />

      <Button
        type="submit"
        className="w-full"
        loading={isLoading}
      >
        Create Account
      </Button>
    </form>
  );
}