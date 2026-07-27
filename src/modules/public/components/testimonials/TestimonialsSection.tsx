"use client";

import { motion, type Variants } from "framer-motion";
import TestimonialsHeader from "./TestimonialsHeader";
import RatingOverview from "./RatingOverview";
import TestimonialSlider from "./TestimonialSlider";
import ReviewCTA from "./ReviewCTA";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const TestimonialsSection = () => {
  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <TestimonialsHeader />

          {/* Rating Overview Card */}
          <RatingOverview />

          {/* Testimonial Cards with Slider Navigation */}
          <TestimonialSlider />

          {/* Write a Review CTA */}
          <ReviewCTA />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
