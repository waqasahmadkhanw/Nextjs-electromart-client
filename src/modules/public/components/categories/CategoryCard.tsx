"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CategoryIcon from "./CategoryIcon";
import type { CategoryCardProps } from "./categories.types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const CategoryCard = ({ icon, name, productCount, index }: CategoryCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-gray-600 dark:bg-gray-800"
    >
      <CategoryIcon icon={icon} />
      <h3 className="mb-1 text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {name}
      </h3>
      <p className="mb-3 text-xs font-medium text-gray-500 dark:text-gray-400">{productCount} Products</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2">
        Browse <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </motion.div>
  );
};

export default CategoryCard;

