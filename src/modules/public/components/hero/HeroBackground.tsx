"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroBackgroundProps {
  imageSrc?: string;
}

const HeroBackground = ({ imageSrc = "/images/banners/banner-01.jpg" }: HeroBackgroundProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover opacity-15 dark:opacity-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/60 to-transparent dark:from-zinc-950/80 dark:via-zinc-950/60 dark:to-transparent" />
      </div>

      {/* Main gradient glow */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-400/15 blur-3xl dark:bg-purple-600/10" />

      {/* Glow circle */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-2xl dark:bg-blue-500/5"
      />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-16 h-6 w-6 rounded-full bg-yellow-400/30 dark:bg-yellow-400/15"
      />
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 right-32 h-4 w-4 rounded-full bg-green-400/25 dark:bg-green-400/10"
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-32 left-20 h-3 w-3 rounded-full bg-purple-400/30 dark:bg-purple-400/10"
      />

      {/* Soft lines */}
      <svg
        className="absolute top-0 left-0 h-full w-full opacity-5 dark:opacity-10"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    </div>
  );
};

export default HeroBackground;
