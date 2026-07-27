"use client";

import { motion, type Variants } from "framer-motion";
import NewArrivalCard from "./NewArrivalCard";
import type { NewArrivalProduct } from "./new-arrivals.types";

interface ProductGridProps {
  products: NewArrivalProduct[];
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
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
    >
      {products.map((product, index) => (
        <NewArrivalCard key={product.id} product={product} index={index} />
      ))}
    </motion.div>
  );
};

export default ProductGrid;

