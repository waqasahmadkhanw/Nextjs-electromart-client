"use client";

import { motion } from "framer-motion";

const topBarItems = [
  { icon: "🔥", label: "Summer Sale", description: "Up to 50% Off" },
  { icon: "🚚", label: "Free Shipping", description: "On Orders $99+" },
  { icon: "↩", label: "Easy Returns", description: "30-Day Returns" },
  { icon: "🔒", label: "Secure", description: "100% Secure Payment" },
  { icon: "📞", label: "Support", description: "24/7 Customer Support" },
];

const containerVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TopBar = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-10 bg-linear-to-r from-blue-600 to-blue-700 text-white"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6">
        {/* Mobile: Show scrolling single line with pause on hover */}
        <div className="flex w-full overflow-hidden text-[11px] font-medium lg:hidden">
          <span className="animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            🔥 Summer Sale · 🚚 Free Shipping · ↩ Easy Returns · 🔒 Secure · 📞 24/7 Support
          </span>
        </div>

        {/* Desktop: Show all items */}
        <div className="hidden w-full items-center justify-between lg:flex">
          {topBarItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
              {item.description && (
                <span className="hidden text-blue-200 xl:inline">- {item.description}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;

