"use client";

import { motion } from "framer-motion";

interface FeatureIconProps {
  icon: string;
}

const FeatureIcon = ({ icon }: FeatureIconProps) => {
  return (
    <motion.div
      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl transition-colors duration-300"
      whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      <motion.span
        className="block leading-none"
        animate={{ rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
    </motion.div>
  );
};

export default FeatureIcon;

