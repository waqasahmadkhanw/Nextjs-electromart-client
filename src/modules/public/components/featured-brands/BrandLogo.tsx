"use client";

import { motion } from "framer-motion";

interface BrandLogoProps {
  logo: string;
  name: string;
  isFeatured?: boolean;
}

const BrandLogo = ({ logo, name, isFeatured = false }: BrandLogoProps) => {
  return (
    <motion.div
      className={`mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 text-4xl transition-all duration-500 ${
        isFeatured
          ? "h-24 w-24 bg-white/10 text-5xl"
          : "h-20 w-20 group-hover:bg-gray-200"
      }`}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      transition={{ type: "spring", damping: 10, stiffness: 200 }}
    >
      <span
        className={`block leading-none transition-all duration-500 ${
          isFeatured ? "grayscale-0" : "grayscale group-hover:grayscale-0"
        }`}
      >
        {logo}
      </span>
    </motion.div>
  );
};

export default BrandLogo;

