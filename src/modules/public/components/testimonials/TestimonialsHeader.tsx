"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TestimonialsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
    >
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600">
          💬 Customer Reviews
        </span>
        <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          What Our Customers Say
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Real reviews from verified buyers.
        </p>
      </div>
      <Link
        href="/reviews"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
      >
        View All Reviews
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default TestimonialsHeader;
