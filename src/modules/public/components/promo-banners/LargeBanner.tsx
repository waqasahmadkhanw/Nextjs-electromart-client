"use client";

import { motion, type Variants } from "framer-motion";
import BannerContent from "./BannerContent";
import type { PromoBanner } from "./promo-banners.data";

interface LargeBannerProps {
  banner: PromoBanner;
}

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 },
  },
};

const LargeBanner = ({ banner }: LargeBannerProps) => {
  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative col-span-1 overflow-hidden rounded-3xl bg-gradient-to-r ${banner.gradient} min-h-[380px] shadow-xl lg:col-span-2 lg:min-h-[420px]`}
    >
      {/* Floating product emoji */}
      <motion.div
        className="absolute -bottom-6 -right-6 select-none text-[12rem] opacity-30 sm:-right-8 sm:text-[16rem] lg:-right-10 lg:text-[20rem]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {banner.productEmoji}
      </motion.div>

      {/* Glassmorphism overlay panel */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

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

export default LargeBanner;

