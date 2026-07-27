"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  title: string;
  description: string;
  href: string;
  label: string;
  className?: string;
}

const HeroBanner = ({
  title,
  description,
  href,
  label,
  className = "",
}: HeroBannerProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 p-6 text-white shadow-xl ${className}`}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm text-blue-100">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition-all hover:gap-3"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/10" />
      <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-white/5" />
    </div>
  );
};

export default HeroBanner;
