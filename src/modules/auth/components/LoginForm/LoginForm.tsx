"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { PasswordField } from "../PasswordField";
import { RememberMe } from "../RememberMe";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormProps {
  isLoading?: boolean;
  onSubmit?: (values: LoginFormValues) => void;
}

export default function LoginForm({
  isLoading = false,
  onSubmit = () => {},
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
        })}
      />

      <PasswordField
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />

      <RememberMe register={register("rememberMe")} />

      <Button
        type="submit"
        className="w-full"
        loading={isLoading}
      >
        Sign In
      </Button>
    </form>
  );
}