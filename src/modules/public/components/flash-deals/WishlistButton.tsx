"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const WishlistButton = () => {
  const [isWished, setIsWished] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsWished((prev) => !prev);
      }}
      className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-shadow hover:shadow-lg"
      aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
    >
      <AnimatePresence mode="wait">
        {isWished ? (
          <motion.span
            key="filled"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </motion.span>
        ) : (
          <motion.span
            key="outline"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Heart className="h-4 w-4 text-gray-400" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default WishlistButton;

