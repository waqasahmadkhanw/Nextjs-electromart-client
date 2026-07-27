"use client";

import { motion } from "framer-motion";

interface NewsletterHeaderProps {
  badge: string;
  title: string;
  description: string;
}

const NewsletterHeader = ({ badge, title, description }: NewsletterHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-3 max-w-lg text-base text-blue-100 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default NewsletterHeader;

