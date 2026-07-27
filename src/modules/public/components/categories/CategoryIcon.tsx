"use client";

interface CategoryIconProps {
  icon: string;
}

const CategoryIcon = ({ icon }: CategoryIconProps) => {
  return (
    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl transition-colors duration-300 group-hover:bg-blue-100">
      <span className="block leading-none">{icon}</span>
    </div>
  );
};

export default CategoryIcon;

