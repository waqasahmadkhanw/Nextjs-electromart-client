"use client";

interface HeroContentProps {
  badge?: string;
  title: string;
  description: string;
}

const HeroContent = ({
  badge,
  title,
  description,
}: HeroContentProps) => {
  return (
    <div className="space-y-5">
      {badge && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="max-w-xl text-base leading-7 text-gray-600 md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default HeroContent;