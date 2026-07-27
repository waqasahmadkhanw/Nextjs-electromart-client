"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedBrandsHeaderProps {
  badge: string;
  title: string;
  description: string;
  viewAllHref?: string;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const FeaturedBrandsHeader = ({
  badge,
  title,
  description,
  viewAllHref = "/brands",
}: FeaturedBrandsHeaderProps) => {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row"
    >
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-700">
          {badge}
        </span>
        <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <Link
        href={viewAllHref}
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
      >
        View All
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default FeaturedBrandsHeader;

