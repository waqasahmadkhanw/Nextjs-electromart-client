"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

interface ExploreMoreButtonProps {
  href?: string;
}

const ExploreMoreButton = ({ href = "/products?sort=newest" }: ExploreMoreButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-10 text-center"
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-md"
      >
        Explore More
        <ArrowDown className="h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default ExploreMoreButton;

