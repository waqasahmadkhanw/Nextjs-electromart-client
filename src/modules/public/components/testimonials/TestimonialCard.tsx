"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import CustomerAvatar from "./CustomerAvatar";
import StarRating from "./StarRating";
import VerifiedBadge from "./VerifiedBadge";
import type { Testimonial } from "./testimonials.types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Quote Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
        <Quote className="h-5 w-5" />
      </div>

      {/* Customer Info Row */}
      <div className="mb-4 flex items-center gap-3">
        <CustomerAvatar name={testimonial.name} size="md" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
            {testimonial.isVerified && <VerifiedBadge />}
          </div>
          <p className="text-xs text-gray-400">{testimonial.location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-3">
        <StarRating rating={testimonial.rating} size="sm" />
      </div>

      {/* Review Text */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Product & Date */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs font-medium text-blue-600">
          Purchased: {testimonial.product}
        </span>
        <span className="text-xs text-gray-400">{testimonial.date}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
