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
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className="object-contain"
      />
    </div>
  );
};

export default HeroImage;
