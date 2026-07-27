"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  showText?: boolean;
}

const Logo = ({
  href = "/",
  src = "/images/logo.png",
  alt = "ElectroMart",
  width = 40,
  height = 40,
  priority = true,
  showText = true,
}: LogoProps) => {
  return (
    <Link
      href={href}
      aria-label="Go to homepage"
      className="inline-flex items-center gap-2"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain rounded-full"
      />
      {showText && (
        <span className="hidden text-lg font-bold text-primary sm:block">
          ElectroMart
        </span>
      )}
    </Link>
  );
};

export default Logo;

