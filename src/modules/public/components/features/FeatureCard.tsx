"use client";

import { motion, type Variants } from "framer-motion";
import FeatureIcon from "./FeatureIcon";
import type { FeatureCardProps } from "./features.types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800"
    >
      <FeatureIcon icon={icon} />
      <h3 className="mb-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 dark:text-white dark:group-hover:text-blue-400">
        {title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

