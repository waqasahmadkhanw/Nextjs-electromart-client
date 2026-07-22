import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the application.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js App Template
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            A scalable, reusable, and production-ready Next.js starter built
            with the App Router, TypeScript, Tailwind CSS, Redux Toolkit,
            TanStack Query, Axios, and modern best practices.
          </p>
          <p>DEVELOPED BY:  Waqasahmad khan  </p>
        </div>
      </section>
    </main>
  );
}