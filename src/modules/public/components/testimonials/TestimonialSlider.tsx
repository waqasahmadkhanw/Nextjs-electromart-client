"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials.data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const TestimonialSlider = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = { mobile: 1, tablet: 2, desktop: 3 };
  const totalPages = Math.ceil(testimonials.length / itemsPerPage.desktop);

  const handlePrev = () => setPage((prev) => Math.max(0, prev - 1));
  const handleNext = () => setPage((prev) => Math.min(totalPages - 1, prev + 1));

  const visibleTestimonials = testimonials.slice(
    page * itemsPerPage.desktop,
    page * itemsPerPage.desktop + itemsPerPage.desktop
  );

  return (
    <div>
      {/* Navigation Arrows */}
      <div className="mb-6 flex items-center justify-end gap-2">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous reviews"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Next reviews"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Testimonial Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === page
                ? "h-2.5 w-6 bg-blue-600"
                : "h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
