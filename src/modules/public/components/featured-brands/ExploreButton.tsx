"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExploreButtonProps {
  href: string;
  label?: string;
  variant?: "default" | "featured";
}

const ExploreButton = ({
  href,
  label = "Explore",
  variant = "default",
}: ExploreButtonProps) => {
  if (variant === "featured") {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        >
          Shop Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2.5"
      >
        {label}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  );
};

export default ExploreButton;

