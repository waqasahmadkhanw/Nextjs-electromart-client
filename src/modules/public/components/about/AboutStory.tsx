import { Target, Eye, Heart } from "lucide-react";
import { cn } from "@/shared/lib/cn";

const storyPoints = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To provide high-quality electronics at competitive prices with exceptional customer service. We strive to make technology accessible to everyone.",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
    borderGlow: "group-hover:border-blue-300 dark:group-hover:border-blue-700",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To become the most trusted online destination for electronics by delivering innovation, reliability, and a seamless shopping experience.",
    icon: Eye,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/40",
    borderGlow: "group-hover:border-purple-300 dark:group-hover:border-purple-700",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Integrity, customer-centricity, and innovation drive everything we do. We believe in building lasting relationships with our customers.",
    icon: Heart,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40",
    borderGlow: "group-hover:border-amber-300 dark:group-hover:border-amber-700",
  },
];

export default function AboutStory() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Our Story
        </span>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
          How It <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">All Began</span>
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Founded in 2020, Electromart started with a simple vision: make
          cutting-edge technology accessible to everyone. What began as a small
          online store has grown into a trusted destination for thousands of
          customers worldwide. We carefully curate our product selection to
          ensure quality, reliability, and the best value for your money.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {storyPoints.map((point, index) => {
          const Icon = point.icon;

          return (
            <div
              key={point.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800/60 dark:bg-gray-950",
                point.borderGlow
              )}
            >
              {/* Gradient background that appears on hover */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  point.bgGradient
                )}
              />

              <div className="relative">
                {/* Icon with gradient */}
                <div
                  className={cn(
                    "mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    point.gradient,
                    "text-white"
                  )}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {point.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={cn(
                    "mx-auto mt-6 h-1 w-12 rounded-full bg-linear-to-r opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100",
                    point.gradient
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

