"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import NewBadge from "./NewBadge";
import WishlistButton from "./WishlistButton";
import type { NewArrivalCardProps } from "./new-arrivals.types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const NewArrivalCard = ({ product, index }: NewArrivalCardProps) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`h-3.5 w-3.5 ${
          i <= Math.round(product.rating)
            ? "text-amber-400"
            : "text-gray-200"
        }`}
      >
        ★
      </span>
    );
  }

  const formatCount = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1).replace(".0", "")}k`;
    return String(count);
  };

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
        {/* NEW Badge */}
        <NewBadge isNew={product.isNew} />

        {/* Wishlist Button */}
        <WishlistButton />

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
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          {product.brand}
        </span>

        {/* Product Name */}
        <h3 className="mb-2 text-sm font-bold leading-snug text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1.5">
          <div className="flex">{stars}</div>
          <span className="text-xs font-medium text-gray-500">
            {product.rating} ({formatCount(product.reviewCount)})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${product.currentPrice.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.currentPrice && (
            <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Color Variants */}
        <div className="mt-3 flex items-center gap-1.5">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="block h-4 w-4 rounded-full border border-gray-200 ring-1 ring-white transition-transform duration-200 hover:scale-125"
              style={{ backgroundColor: color }}
              title={`Color variant ${idx + 1}`}
            />
          ))}
        </div>

        {/* Add to Cart */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 active:scale-[0.98]">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default NewArrivalCard;

