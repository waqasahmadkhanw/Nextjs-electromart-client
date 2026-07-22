"use client";

import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const HeroImage = ({
  src,
  alt,
  priority = false,
}: HeroImageProps) => {
  return (
    <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={520}
        height={520}
        priority={priority}
        className="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
      />
    </div>
  );
};

export default HeroImage;