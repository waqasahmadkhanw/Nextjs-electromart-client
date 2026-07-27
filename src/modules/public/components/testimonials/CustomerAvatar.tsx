"use client";

interface CustomerAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-10 w-10 text-xs",
  md: "h-14 w-14 text-sm",
  lg: "h-16 w-16 text-base",
};

const COLORS = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-purple-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
];

const CustomerAvatar = ({ name, size = "md" }: CustomerAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colorIndex = name.length % COLORS.length;
  const bgColor = COLORS[colorIndex];

  return (
    <div
      className={`${sizeMap[size]} ${bgColor} flex items-center justify-center rounded-full font-bold text-white ring-2 ring-white`}
      title={name}
    >
      {initials}
    </div>
  );
};

export default CustomerAvatar;
