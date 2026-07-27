"use client";

import { useState } from "react";
import { Input } from "@/shared/components/ui/Input";
import { Textarea } from "@/shared/components/ui/Textarea";
import { Button } from "@/shared/components/ui/Button";
import { useContactMutation } from "../../mutations";
import { useToast } from "@/shared/components/ui/Toast/useToast";
import { User, Mail, MessageSquare, Send, AlertCircle } from "lucide-react";

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
      {/* Decorative header */}
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 text-white shadow-sm">
          <Send className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">Send us a Message</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            We typically respond within 24 hours
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400">
          <User className="h-4 w-4" />
        </div>
        <Input
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="pl-10"
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400">
          <Mail className="h-4 w-4" />
        </div>
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="pl-10"
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400">
          <MessageSquare className="h-4 w-4" />
        </div>
        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          required
          className="pl-10"
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us more about your inquiry..."
        rows={5}
        required
      />

      {/* Form footer */}
      <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 p-3 dark:border-amber-800/30 dark:bg-amber-950/20">
        <div className="flex items-start gap-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-300">
            Your information is secure and will not be shared with third parties.
            By submitting, you agree to our privacy policy.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isPending}
        className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
