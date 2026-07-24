"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="w-full max-w-lg text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          404 Error
        </span>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-4 text-base text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Go Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
}