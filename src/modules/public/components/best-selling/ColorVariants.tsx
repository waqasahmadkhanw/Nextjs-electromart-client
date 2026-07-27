"use client";

interface ColorVariantsProps {
  colors: string[];
}

const ColorVariants = ({ colors }: ColorVariantsProps) => {
  return (
    <div className="flex items-center gap-1.5">
      {colors.map((color, idx) => (
        <span
          key={idx}
          className="block h-4 w-4 rounded-full border border-gray-200 ring-1 ring-white transition-transform duration-200 hover:scale-125"
          style={{ backgroundColor: color }}
          title={`Color variant ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default ColorVariants;

