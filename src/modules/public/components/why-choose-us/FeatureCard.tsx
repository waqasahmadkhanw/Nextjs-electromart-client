"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { FeatureItem } from "./why-choose-us.types";

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
<div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 dark:bg-blue-900/50 dark:group-hover:bg-blue-900/70">
        {feature.icon}
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-1.5 text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
          {feature.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {feature.description}
        </p>
      </div>

      {/* Divider */}
      <div className="relative mt-4 border-t border-gray-100" />

      {/* Learn More */}
      <div className="relative mt-3 flex items-center gap-1 text-xs font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2">
        Learn More
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;

