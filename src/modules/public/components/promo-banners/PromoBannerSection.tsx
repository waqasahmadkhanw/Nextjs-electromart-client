"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { promoBanners } from "./promo-banners.data";
import LargeBanner from "./LargeBanner";
import SmallBanner from "./SmallBanner";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const PromoBannerSection = () => {
  const largeBanner = promoBanners.find((b) => b.size === "large")!;
  const smallBanners = promoBanners.filter((b) => b.size === "small");

  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="Featured promotions"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
              Featured Promotions
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Don&apos;t miss out on limited-time offers
            </p>
          </div>
          <Link
            href="/promotions"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Banner Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3"
        >
          {/* Large Banner — spans 2 columns on desktop */}
          <LargeBanner banner={largeBanner} />

          {/* Small Banners — stacked on desktop */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {smallBanners.map((banner, index) => (
              <SmallBanner key={banner.id} banner={banner} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBannerSection;

