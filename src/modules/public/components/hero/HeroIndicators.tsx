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
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive}
            onClick={() => onChange(index)}
            className={`rounded-full transition-all duration-300 ${
              isActive
                ? "h-2.5 w-6 bg-blue-600"
                : "h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
};

export default HeroIndicators;
