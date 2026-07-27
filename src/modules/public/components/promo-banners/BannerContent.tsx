"use client";

import BannerButton from "./BannerButton";

interface BannerContentProps {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  size: "large" | "small";
}

const BannerContent = ({
  badge,
  title,
  description,
  ctaLabel,
  ctaHref,
  size,
}: BannerContentProps) => {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
      <span
        className={`inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm ${
          size === "large" ? "mb-3" : "mb-2"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`font-bold leading-tight text-white ${
          size === "large" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-xl sm:text-2xl"
        }`}
      >
        {title}
      </h2>
      {size === "large" && (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
          {description}
        </p>
      )}
      {size === "small" && (
        <p className="mt-1 text-sm text-white/70">{description}</p>
      )}
      <div className={size === "large" ? "mt-6" : "mt-4"}>
        <BannerButton label={ctaLabel} href={ctaHref} />
      </div>
    </div>
  );
};

export default BannerContent;

