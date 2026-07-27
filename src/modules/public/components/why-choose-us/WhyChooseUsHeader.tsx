"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface WhyChooseUsHeaderProps {
  badge: string;
  title: string;
  description: string;
  learnMoreHref: string;
}

const WhyChooseUsHeader = ({
  badge,
  title,
  description,
  learnMoreHref,
}: WhyChooseUsHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-700"
      >
        {badge}
      </motion.span>
      <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base dark:text-gray-400">
        {description}
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-4"
      >
        <Link
          href={learnMoreHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all hover:text-blue-700 hover:gap-3"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUsHeader;

