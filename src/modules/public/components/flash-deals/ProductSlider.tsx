"use client";

import { motion, type Variants } from "framer-motion";
import FlashProductCard from "./FlashProductCard";
import type { FlashDealProduct } from "./flash-deals.types";

interface ProductSliderProps {
  products: FlashDealProduct[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const ProductSlider = ({ products }: ProductSliderProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
    >
      {products.map((product, index) => (
        <FlashProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default ProductSlider;

