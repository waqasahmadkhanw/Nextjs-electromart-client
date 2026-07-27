import { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "compact" | "hero";
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: "py-12 md:py-16",
  compact: "py-8 md:py-10",
  hero: "py-16 md:py-24",
};

export default function PageHeader({
  title,
  description,
  children,
  variant = "default",
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "bg-gray-50 dark:bg-gray-900/50",
        variantStyles[variant],
        className
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
