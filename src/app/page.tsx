"use client";

import { motion, type Variants } from "framer-motion";
import {
  Header,
  Footer,
  NewsletterSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/modules/public/components";
import { Hero } from "@/modules/public/components/hero";
import { FeaturesBar } from "@/modules/public/components/features";
import { CategoriesSection } from "@/modules/public/components/categories";
import { FlashDealsSection } from "@/modules/public/components/flash-deals";
import { PromoBannerSection } from "@/modules/public/components/promo-banners";
import { BestSellingSection } from "@/modules/public/components/best-selling";
import { FeaturedBrandsSection } from "@/modules/public/components/featured-brands";
import { NewArrivalsSection } from "@/modules/public/components/new-arrivals";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AnimatedSection><Hero /></AnimatedSection>
        <AnimatedSection><FeaturesBar /></AnimatedSection>
        <AnimatedSection><CategoriesSection /></AnimatedSection>
        <AnimatedSection><FlashDealsSection /></AnimatedSection>
        <AnimatedSection><PromoBannerSection /></AnimatedSection>
        <AnimatedSection><BestSellingSection /></AnimatedSection>
        <AnimatedSection><WhyChooseUsSection /></AnimatedSection>
        <AnimatedSection><FeaturedBrandsSection /></AnimatedSection>
<AnimatedSection><NewArrivalsSection /></AnimatedSection>
        <AnimatedSection><TestimonialsSection /></AnimatedSection>
        <AnimatedSection><NewsletterSection /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
