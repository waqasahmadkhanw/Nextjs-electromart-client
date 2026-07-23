import { RegisterForm } from "../components";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <RegisterForm />
      </section>
    </main>
  );
}