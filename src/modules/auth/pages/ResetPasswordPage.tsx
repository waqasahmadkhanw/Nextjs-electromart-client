import { Metadata } from "next";

import { ResetPasswordForm } from "../components";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Create a new password for your account.",
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <ResetPasswordForm />
      </section>
    </main>
  );
}