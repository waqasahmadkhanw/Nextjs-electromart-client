"use client";

import { motion, type Variants } from "framer-motion";
import BrandCard from "./BrandCard";
import type { Brand } from "./featured-brands.types";

interface BrandGridProps {
  items: Brand[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const BrandGrid = ({ items }: BrandGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {items.map((brand, index) => (
        <BrandCard key={brand.id} brand={brand} index={index} />
      ))}
    </motion.div>
  );
};

export default BrandGrid;

