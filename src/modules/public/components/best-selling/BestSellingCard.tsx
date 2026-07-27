"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Rating from "./Rating";
import Price from "./Price";
import ColorVariants from "./ColorVariants";
import ProductActions from "./ProductActions";
import type { BestSellingCardProps } from "./best-selling.types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const BestSellingCard = ({ product, index }: BestSellingCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 dark:bg-gray-900">
        {/* Sale Badge */}
        {product.isSale && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
            SALE
          </div>
        )}

        {/* Hover Actions */}
        <ProductActions />

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Quick View overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
          <button className="rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold text-gray-800 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white">
            Quick View
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        {/* Brand */}
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {product.brand}
        </span>

        {/* Product Name */}
        <h3 className="mb-2 text-sm font-bold leading-snug text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          <Rating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        {/* Price */}
        <Price
          currentPrice={product.currentPrice}
          originalPrice={product.originalPrice}
        />

        {/* Color Variants */}
        <div className="mt-3">
          <ColorVariants colors={product.colors} />
        </div>

        {/* Add to Cart */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default BestSellingCard;

