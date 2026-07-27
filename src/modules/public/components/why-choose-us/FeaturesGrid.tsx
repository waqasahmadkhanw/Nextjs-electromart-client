"use client";

import { motion, type Variants } from "framer-motion";
import FeatureCard from "./FeatureCard";
import type { FeatureItem } from "./why-choose-us.types";

interface FeaturesGridProps {
  features: FeatureItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} feature={feature} index={index} />
      ))}
    </motion.div>
  );
};

export default FeaturesGrid;

