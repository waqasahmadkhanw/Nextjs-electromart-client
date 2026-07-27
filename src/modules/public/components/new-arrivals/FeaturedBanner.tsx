"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const FeaturedBanner = () => {
  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative mb-10 overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 to-purple-600 min-h-75 shadow-xl sm:min-h-85"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-8 -right-8 select-none text-[10rem] opacity-10 sm:text-[14rem] lg:text-[18rem]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
      <div className="absolute -left-4 -top-4 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-10 right-20 h-20 w-20 rounded-full bg-white/5 blur-xl" />

      {/* Glassmorphism overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center p-8 sm:p-10 lg:p-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
        >
          ✨ NEW COLLECTION
        </motion.span>

        <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Discover What&apos;s New
        </h3>
        <p className="mt-2 text-base text-indigo-200 sm:text-lg">
          Latest Premium Products
        </p>

        <div className="mt-6">
          <Link
            href="/products?sort=newest"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-all duration-300 hover:bg-indigo-50 hover:shadow-lg active:scale-[0.98]"
          >
            Shop Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBanner;

