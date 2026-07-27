"use client";

import { motion } from "framer-motion";
import { trustCards } from "./hero.data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const TrustCards = () => {
  return (
    <>
      {/* Mobile: Horizontal scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar md:hidden">
        {trustCards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex shrink-0 items-center gap-3 rounded-2xl bg-white p-3 shadow-md w-48 dark:bg-gray-800 dark:shadow-gray-900/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg dark:bg-blue-900/50">
              {card.icon}
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-semibold text-gray-900 truncate dark:text-gray-100">{card.title}</h4>
              <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tablet+ : 2-column horizontal layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-3 lg:hidden">
        {trustCards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-md dark:bg-gray-800 dark:shadow-gray-900/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg dark:bg-blue-900/50">
              {card.icon}
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-semibold text-gray-900 truncate dark:text-gray-100">{card.title}</h4>
              <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Vertical stack */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex lg:flex-col gap-3 w-full"
      >
        {trustCards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 dark:bg-gray-800 dark:shadow-gray-900/30 dark:hover:bg-gray-750"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl transition-colors group-hover:bg-blue-100 dark:bg-blue-900/50 dark:group-hover:bg-blue-900/70">
              {card.icon}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{card.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default TrustCards;

