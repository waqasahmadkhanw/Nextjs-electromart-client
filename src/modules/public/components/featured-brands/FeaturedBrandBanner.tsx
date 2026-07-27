"use client";

import { motion, type Variants } from "framer-motion";
import BrandLogo from "./BrandLogo";
import ExploreButton from "./ExploreButton";
import type { Brand } from "./featured-brands.types";

interface FeaturedBrandBannerProps {
  brand: Brand;
}

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const FeaturedBrandBanner = ({ brand }: FeaturedBrandBannerProps) => {
  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-3xl bg-linear-to-r ${brand.gradient} min-h-80 shadow-xl sm:min-h-95`}
    >
      {/* Floating background logo */}
      <motion.div
        className="absolute -bottom-8 -right-8 select-none text-[10rem] opacity-10 sm:-right-10 sm:text-[14rem] lg:-right-12 lg:text-[18rem]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {brand.logo}
      </motion.div>

      {/* Glassmorphism overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10 lg:p-12">
        <div className="flex items-start gap-4">
          <BrandLogo logo={brand.logo} name={brand.name} isFeatured />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {brand.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-200 sm:text-base">
              {brand.tagline}
            </p>
          </div>
        </div>

        <div className="mt-auto">
          {/* Category chips */}
          {brand.categories && (
            <div className="mb-4 flex flex-wrap gap-2">
              {brand.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Discount badge */}
          {brand.discount && (
            <p className="mb-4 text-lg font-bold text-amber-400 sm:text-xl lg:text-2xl">
              {brand.discount}
            </p>
          )}

          {/* Description and CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/80 sm:text-base">
              {brand.description}
            </p>
            <ExploreButton
              href={`/brands/${brand.slug}`}
              variant="featured"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBrandBanner;

