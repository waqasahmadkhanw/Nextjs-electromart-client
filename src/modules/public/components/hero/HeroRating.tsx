"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { customerRating } from "./hero.data";

const HeroRating = () => {
  const fullStars = Math.floor(customerRating.rating);
  const hasHalfStar = customerRating.rating % 1 >= 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap items-center gap-4"
    >
      {/* Avatar group */}
      <div className="flex -space-x-2">
        {customerRating.avatars.map((avatar, i) => (
          <div
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs font-bold text-blue-600 dark:border-gray-800 dark:bg-blue-900/50 dark:text-blue-300"
          >
            <span>{["JD", "SK", "ML"][i]}</span>
          </div>
        ))}
      </div>

      {/* Rating info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < fullStars
                  ? "fill-yellow-400 text-yellow-400"
                  : i === fullStars && hasHalfStar
                  ? "fill-yellow-400/50 text-yellow-400"
                  : "fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600"
              }`}
            />
          ))}
          <span className="ml-1.5 text-sm font-bold text-gray-900 dark:text-gray-100">{customerRating.rating}</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-700 dark:text-gray-300">{customerRating.count}</span> {customerRating.reviews}
        </p>
      </div>
    </motion.div>
  );
};

export default HeroRating;
