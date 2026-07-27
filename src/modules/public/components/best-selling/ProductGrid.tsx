"use client";

import { motion, type Variants } from "framer-motion";
import BestSellingCard from "./BestSellingCard";
import type { BestSellingProduct } from "./best-selling.types";

interface ProductGridProps {
  products: BestSellingProduct[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-7 lg:gap-8"
    >
      {products.map((product, index) => (
        <BestSellingCard key={product.id} product={product} index={index} />
      ))}
    </motion.div>
  );
};

export default ProductGrid;
