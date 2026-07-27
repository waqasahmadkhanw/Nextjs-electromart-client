import { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "compact" | "hero";
  className?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

const variantStyles: Record<string, string> = {
  default: "py-12 md:py-20",
  compact: "py-8 md:py-10",
  hero: "py-16 md:py-24",
};

const variantBg: Record<string, string> = {
  default:
    "bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30",
  compact:
    "bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30",
  hero:
    "bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-900",
};

export default function PageHeader({
  title,
  description,
  children,
  variant = "default",
  className,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variantBg[variant],
        variantStyles[variant],
        className
      )}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-900/10" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl dark:bg-indigo-900/10" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-50/20 blur-2xl dark:bg-purple-900/5" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center justify-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 dark:text-gray-200">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title with animated gradient */}
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            {description}
          </p>
        )}

        {children && (
          <div className="mt-8 animate-fade-in-up">{children}</div>
        )}
      </div>
    </section>
  );
}
