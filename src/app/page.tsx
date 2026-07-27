import type { Metadata } from "next";
import { Header, Footer } from "@/modules/public/components";
import { Hero } from "@/modules/public/components/hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the application.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
