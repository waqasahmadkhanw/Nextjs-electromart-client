"use client";

import { motion } from "framer-motion";

interface HeroContentProps {
  badge?: string;
  title: string;
  description: string;
}

const HeroContent = ({ badge, title, description }: HeroContentProps) => {
  return (
    <div className="space-y-4 md:space-y-5">
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 md:px-4 md:py-1.5"
        >
          {badge}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-lg text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-base md:text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default HeroContent;
