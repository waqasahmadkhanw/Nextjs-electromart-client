"use client";

import { motion, type Variants } from "framer-motion";
import CategoryCard from "./CategoryCard";
import type { CategoryItem } from "./categories.types";

interface CategoriesGridProps {
  items: CategoryItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const CategoriesGrid = ({ items }: CategoriesGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
    >
      {items.map((category, index) => (
        <CategoryCard
          key={category.slug}
          icon={category.icon}
          name={category.name}
          productCount={category.productCount}
          slug={category.slug}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default CategoriesGrid;

