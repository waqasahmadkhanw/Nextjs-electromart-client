"use client";

import { motion } from "framer-motion";

const LoadMoreButton = () => {
  return (
    <motion.div
      className="mt-10 text-center sm:mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <button className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md active:scale-95">
        Load More
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </motion.div>
  );
};

export default LoadMoreButton;
