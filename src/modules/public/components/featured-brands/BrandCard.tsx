"use client";

import { motion, type Variants } from "framer-motion";
import BrandLogo from "./BrandLogo";
import BrandStats from "./BrandStats";
import ExploreButton from "./ExploreButton";
import type { Brand } from "./featured-brands.types";

interface BrandCardProps {
  brand: Brand;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const BrandCard = ({ brand, index }: BrandCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group relative cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <BrandLogo logo={brand.logo} name={brand.name} />
      <h3 className="relative mb-1 text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
        {brand.name}
      </h3>
      <BrandStats
        productCount={brand.productCount}
        startingPrice={brand.startingPrice}
      />
      <ExploreButton href={`/brands/${brand.slug}`} />
    </motion.div>
  );
};

export default BrandCard;

