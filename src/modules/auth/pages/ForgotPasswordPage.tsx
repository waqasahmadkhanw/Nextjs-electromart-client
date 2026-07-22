import { Metadata } from "next";

import { ForgotPasswordForm } from "../components";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Request a password reset link to regain access to your account.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <ForgotPasswordForm />
      </section>
    </main>
  );
}