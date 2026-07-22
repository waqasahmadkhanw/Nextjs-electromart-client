import { Metadata } from "next";

import { LoginForm } from "../components";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <LoginForm />
      </section>
    </main>
  );
}