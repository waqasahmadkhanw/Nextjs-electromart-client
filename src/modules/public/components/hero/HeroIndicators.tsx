"use client";

interface HeroIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

const HeroIndicators = ({
  total,
  current,
  onChange,
}: HeroIndicatorsProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive}
            onClick={() => onChange(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              isActive
                ? "w-8 bg-primary"
                : "w-3 bg-white/70 hover:bg-white"
            }`}
          />
        );
      })}
    </div>
  );
};

export default HeroIndicators;