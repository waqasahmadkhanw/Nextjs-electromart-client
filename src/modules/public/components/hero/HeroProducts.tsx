"use client";

import { motion } from "framer-motion";

const products = [
  { id: "laptop", name: "Laptop", icon: "💻", size: "large", x: 0, y: 0 },
  { id: "phone", name: "Phone", icon: "📱", size: "medium", x: 80, y: -60, rotate: 12 },
  { id: "watch", name: "Watch", icon: "⌚", size: "small", x: -70, y: 50, rotate: -6 },
  { id: "earbuds", name: "Earbuds", icon: "🎧", size: "small", x: 70, y: 60, rotate: 8 },
];

const sizeMap = {
  large: "h-20 w-20 text-3xl sm:h-24 sm:w-24 sm:text-4xl",
  medium: "h-14 w-14 text-xl sm:h-16 sm:w-16 sm:text-2xl",
  small: "h-10 w-10 text-lg sm:h-12 sm:w-12 sm:text-xl",
};

const HeroProducts = () => {
  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80">
      {/* Glow platform */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-32 w-32 rounded-full bg-blue-500/20 blur-2xl dark:bg-blue-500/10 sm:h-40 sm:w-40"
      />

      {/* Shadow at bottom */}
      <div className="absolute bottom-6 h-4 w-40 rounded-full bg-black/5 blur-md dark:bg-white/5 sm:w-48" />

      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3 + index * 0.1,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className={`absolute flex items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:ring-gray-700 ${sizeMap[product.size as keyof typeof sizeMap]}`}
          style={{
            transform: `translate(${product.x}px, ${product.y}px) rotate(${product.rotate || 0}deg)`,
          }}
        >
          {product.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroProducts;
