"use client";

import { motion } from "framer-motion";

interface StockProgressProps {
  remaining: number;
  total: number;
}

const StockProgress = ({ remaining, total }: StockProgressProps) => {
  const progressPercent = ((total - remaining) / total) * 100;

  return (
    <div className="mt-3">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium text-gray-700">Sold: {total - remaining}</span>
        <span className="font-medium text-red-500">Only {remaining} Left</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-red-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${progressPercent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default StockProgress;

