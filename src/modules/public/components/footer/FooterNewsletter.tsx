"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";

interface FooterNewsletterProps {
  onSubmit?: (email: string) => void;
}

const FooterNewsletter: FC<FooterNewsletterProps> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    onSubmit?.(email);

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>

      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        required
        className="h-11 flex-1 rounded-md border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-primary"
      />

      <button
        type="submit"
        className="h-11 rounded-md bg-primary px-6 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterNewsletter;