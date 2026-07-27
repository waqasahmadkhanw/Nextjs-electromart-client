"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import DealBadge from "./DealBadge";
import WishlistButton from "./WishlistButton";
import StockProgress from "./StockProgress";
import type { FlashDealCardProps } from "./flash-deals.types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const FlashProductCard = ({ product, index }: FlashDealCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Image Section */}
<div className="relative aspect-4/3 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <DealBadge discountPercent={product.discountPercent} />
        <WishlistButton />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Quick overlay on hover */}
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
        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{product.name}</h3>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs font-medium text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            ${product.currentPrice}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
            ${product.originalPrice}
          </span>
          <span className="rounded-md bg-red-50 px-2 py-0.5 text-xs font-bold text-red-500">
            Save ${product.originalPrice - product.currentPrice}
          </span>
        </div>

        {/* Stock Progress */}
        <StockProgress
          remaining={product.stockRemaining}
          total={product.totalStock}
        />

        {/* Add to Cart */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default FlashProductCard;

