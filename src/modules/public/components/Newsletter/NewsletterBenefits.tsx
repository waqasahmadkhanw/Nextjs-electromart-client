"use client";

import { motion, type Variants } from "framer-motion";
import type { Benefit } from "./newsletter.types";

interface NewsletterBenefitsProps {
  benefits: Benefit[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const benefitVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const NewsletterBenefits = ({ benefits }: NewsletterBenefitsProps) => {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-6 space-y-3"
    >
      {benefits.map((benefit) => (
        <motion.li
          key={benefit.label}
          variants={benefitVariants}
          className="flex items-center gap-3"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-sm text-emerald-300">
            {benefit.icon}
          </span>
          <span className="text-sm font-medium text-white/90 sm:text-base">
            {benefit.label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NewsletterBenefits;

