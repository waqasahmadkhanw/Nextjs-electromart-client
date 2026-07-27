"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NewsletterFormProps {
  placeholder: string;
  buttonLabel: string;
}

const NewsletterForm = ({ placeholder, buttonLabel }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
          <span className="text-lg text-gray-400">📧</span>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="h-14 w-full rounded-xl border border-white/20 bg-white px-11 text-base text-gray-900 placeholder-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="h-14 shrink-0 rounded-xl bg-orange-500 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40"
      >
        {buttonLabel} <span className="ml-1">✈</span>
      </motion.button>
    </motion.form>
  );
};

export default NewsletterForm;

