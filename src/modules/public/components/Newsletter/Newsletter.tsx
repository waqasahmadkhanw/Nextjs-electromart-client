"use client";

import { useState } from "react";
import { Input } from "@/shared/components/ui/Input";
import { Button } from "@/shared/components/ui/Button";
import { useNewsletterMutation } from "../../mutations";
import { useToast } from "@/shared/components/ui/Toast/useToast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useNewsletterMutation();
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    mutate(
      { email },
      {
        onSuccess: () => {
          setEmail("");
          toast.success("Subscribed successfully!", "You're now on our mailing list.");
        },
        onError: () => {
          toast.error("Subscription failed", "Please try again later.");
        },
      }
    );
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Subscribe to our newsletter
        </h2>

        <p className="mt-3 text-muted-foreground">
          Get updates, news and latest information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-4 sm:flex-row"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1"
            required
          />

          <Button
            type="submit"
            variant="primary"
            loading={isPending}
          >
            {isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
