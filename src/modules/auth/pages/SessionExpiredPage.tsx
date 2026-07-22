import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Session Expired",
  description: "Your session has expired. Please sign in again.",
};

export default function SessionExpiredPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-lg border bg-background p-8 text-center shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight">
          Session Expired
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Your session has expired for security reasons. Please sign in again to
          continue.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Sign In Again
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
}