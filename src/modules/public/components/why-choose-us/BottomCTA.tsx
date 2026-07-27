"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BottomCTAProps {
  title: string;
  buttonLabel: string;
  buttonHref: string;
}

const BottomCTA = ({ title, buttonLabel, buttonHref }: BottomCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 text-center"
    >
      <h3 className="mb-6 text-xl font-semibold text-gray-900 sm:text-2xl">
        {title}
      </h3>
      <Link
        href={buttonHref}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
      >
        {buttonLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default BottomCTA;

