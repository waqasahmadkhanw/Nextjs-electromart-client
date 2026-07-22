import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unauthorized",
  description: "You are not authorized to access this page.",
};

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-lg border p-8 text-center shadow-sm">
        <h1 className="text-4xl font-bold">401</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Unauthorized
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          You do not have permission to access this page.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
          >
            Go Home
          </Link>

          <Link
            href="/login"
            className="rounded-md border px-4 py-2 transition hover:bg-muted"
          >
            Sign In
          </Link>
        </div>
      </section>
    </main>
  );
}