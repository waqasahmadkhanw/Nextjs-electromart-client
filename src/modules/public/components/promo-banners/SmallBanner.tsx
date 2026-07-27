"use client";

import { motion, type Variants } from "framer-motion";
import BannerContent from "./BannerContent";
import type { PromoBanner } from "./promo-banners.data";

interface SmallBannerProps {
  banner: PromoBanner;
  index: number;
}

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const SmallBanner = ({ banner, index }: SmallBannerProps) => {
  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${banner.gradient} min-h-[200px] shadow-lg`}
    >
      {/* Floating product emoji */}
      <motion.div
        className="absolute -bottom-4 -right-4 select-none text-[6rem] opacity-25 sm:text-[7rem]"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      >
        {banner.productEmoji}
      </motion.div>

      {/* Glassmorphism overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/15 to-transparent" />

      {/* Content */}
      <BannerContent
        badge={banner.badge}
        title={banner.title}
        description={banner.description}
        ctaLabel={banner.ctaLabel}
        ctaHref={banner.ctaHref}
        size={banner.size}
      />
    </motion.div>
  );
};

export default SmallBanner;

