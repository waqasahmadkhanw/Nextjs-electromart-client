"use client";

import Link from "next/link";

interface BannerButtonProps {
  label: string;
  href: string;
}

const BannerButton = ({ label, href }: BannerButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-block rounded-xl bg-white/20 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30 active:scale-95"
    >
      {label}
    </Link>
  );
};

export default BannerButton;

