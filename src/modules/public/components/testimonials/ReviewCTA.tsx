"use client";

import { motion } from "framer-motion";
import { Star, PencilLine } from "lucide-react";
import Link from "next/link";

const ReviewCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 text-center"
    >
      <div className="mb-4 flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Link
        href="/write-review"
        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md active:scale-95"
      >
        <PencilLine className="h-4 w-4" />
        Write a Review
      </Link>
    </motion.div>
  );
};

export default ReviewCTA;
