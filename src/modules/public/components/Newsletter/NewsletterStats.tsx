"use client";

import { motion, type Variants } from "framer-motion";
import type { Stat } from "./newsletter.types";

interface NewsletterStatsProps {
  stats: Stat[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

const NewsletterStats = ({ stats }: NewsletterStatsProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={statVariants}
          className="flex flex-col items-center rounded-xl bg-white/5 px-4 py-4 text-center backdrop-blur-sm sm:py-5"
        >
          <span className="text-2xl font-bold text-white sm:text-3xl">
            {stat.value}
          </span>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-sm">{stat.icon}</span>
            <span className="text-xs font-medium text-blue-200 sm:text-sm">
              {stat.label}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NewsletterStats;

