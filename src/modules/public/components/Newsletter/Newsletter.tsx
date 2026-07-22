"use client";

import { useState } from "react";
import { useNewsletterMutation } from "../../mutations";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useNewsletterMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    mutate(
      { email },
      {
        onSuccess: () => {
          setEmail("");
        },
      }
    );
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold">
          Subscribe to our newsletter
        </h2>

        <p className="mt-3">
          Get updates, news and latest information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg px-6 py-3"
          >
            {isPending ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}