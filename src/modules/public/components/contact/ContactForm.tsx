"use client";

import { useState } from "react";
import { useContactMutation } from "../../mutations";

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
      },
    });
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full rounded-lg border p-3"
      />

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-lg border p-3"
      />

      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full rounded-lg border p-3"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={5}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg px-6 py-3"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}