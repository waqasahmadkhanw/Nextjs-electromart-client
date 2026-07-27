"use client";

import { motion } from "framer-motion";

interface NewBadgeProps {
  isNew: boolean;
}

const NewBadge = ({ isNew }: NewBadgeProps) => {
  if (!isNew) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", damping: 10, stiffness: 200 }}
      className="absolute left-4 top-4 z-10"
    >
      <motion.span
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg"
      >
        NEW
      </motion.span>
    </motion.div>
  );
};

export default NewBadge;

