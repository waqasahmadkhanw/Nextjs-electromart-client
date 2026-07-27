"use client";

import { motion, type Variants } from "framer-motion";
import { featuredBrand, brands } from "./featured-brands.data";
import FeaturedBrandsHeader from "./FeaturedBrandsHeader";
import FeaturedBrandBanner from "./FeaturedBrandBanner";
import BrandGrid from "./BrandGrid";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const FeaturedBrandsSection = () => {
  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="Featured brands"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <FeaturedBrandsHeader
          badge="🏆 Trusted Brands"
          title="Featured Brands"
          description="Explore products from the world's leading brands."
          viewAllHref="/brands"
        />

        {/* Animated container */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {/* Featured Brand Banner — Apple hero */}
          <FeaturedBrandBanner brand={featuredBrand} />

          {/* Brand Grid — remaining 7 brands */}
          <BrandGrid items={brands} />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBrandsSection;

