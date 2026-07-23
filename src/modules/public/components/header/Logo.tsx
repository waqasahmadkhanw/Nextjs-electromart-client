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
}

const Logo = ({
  href = "/",
  src = "/images/logo.png",
  alt = "Logo",
  width = 40,
  height = 40,
  priority = true,
}: LogoProps) => {
  return (
    <Link
      href={href}
      aria-label="Go to homepage"
      className="inline-flex items-center"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain rounded-full"
      />
    </Link>
  );
};

export default Logo;