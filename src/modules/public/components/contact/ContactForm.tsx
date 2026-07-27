"use client";

import { useState } from "react";
import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import { Button } from "@/shared/components/ui/Button";
import { useContactMutation } from "../../mutations";
import { useToast } from "@/shared/components/ui/Toast/useToast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialState);

  const { mutate, isPending } = useContactMutation();
  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        setFormData(initialState);
        toast.success("Message sent!", "We'll get back to you shortly.");
      },
      onError: () => {
        toast.error("Failed to send", "Please try again later.");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />

      <Input
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="What is this about?"
        required
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us more..."
        rows={5}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isPending}
        className="w-full"
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
