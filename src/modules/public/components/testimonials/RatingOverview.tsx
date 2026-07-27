"use client";

import { motion, type Variants } from "framer-motion";
import { Star, ThumbsUp, MessageSquareText } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const RatingOverview = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-10 rounded-3xl bg-linear-to-r from-yellow-50 to-orange-50 border border-yellow-100 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Overall Rating */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-gray-900">4.9</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
          <div className="h-12 w-px bg-yellow-200 hidden sm:block" />
          <div className="text-center sm:text-left">
            <span className="text-2xl font-bold text-gray-900">12,500+</span>
            <p className="text-xs font-medium text-gray-500">Verified Reviews</p>
          </div>
        </div>

        {/* Recommendation & Customer Photos */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          {/* Recommend */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <ThumbsUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900">98%</span>
              <p className="text-xs font-medium text-gray-500">Recommend Us</p>
            </div>
          </div>

          {/* Customer Photos */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["Sarah", "James", "Emma"].map((name, i) => {
                const colors = ["bg-blue-500", "bg-emerald-500", "bg-purple-500"];
                return (
                  <div
                    key={i}
                    className={`${colors[i]} flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white`}
                  >
                    {name[0]}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MessageSquareText className="h-3.5 w-3.5" />
              <span className="font-medium">Loved by thousands</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RatingOverview;
