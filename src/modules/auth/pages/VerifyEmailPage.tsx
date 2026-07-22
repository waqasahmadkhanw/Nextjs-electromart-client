import { Metadata } from "next";

import { VerifyEmailForm } from "../components";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to activate your account.",
};

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <VerifyEmailForm />
      </section>
    </main>
  );
}