"use client";

import { motion, type Variants } from "framer-motion";
import type { Stat } from "./why-choose-us.types";

interface StatisticsCardProps {
  stats: Stat[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const StatisticsCard = ({ stats }: StatisticsCardProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 to-blue-700 p-8 sm:p-10 shadow-xl"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" />
        <svg
          className="absolute top-0 left-0 h-full w-full opacity-5"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statVariants}
            className="text-center"
          >
            <div className="mb-1 text-3xl sm:text-4xl font-bold text-white">
              {stat.value}
            </div>
            <div className="flex items-center justify-center gap-1.5">
              {stat.icon && (
                <span className="text-sm">{stat.icon}</span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-200">
                {stat.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Customer Rating */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mt-6 flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm"
      >
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-4 w-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-semibold text-white">4.9</span>
        <span className="text-xs text-blue-200">(50K+ Reviews)</span>
      </motion.div>
    </motion.div>
  );
};

export default StatisticsCard;

