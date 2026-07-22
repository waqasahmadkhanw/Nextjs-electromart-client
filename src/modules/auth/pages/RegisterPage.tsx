import { Metadata } from "next";

import { RegisterForm } from "../components";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create a new account to get started.",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <RegisterForm />
      </section>
    </main>
  );
}