"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-sm text-muted-foreground">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

