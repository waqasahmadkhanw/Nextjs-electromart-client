import { Package, Users, Globe, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "50K+",
    label: "Products Sold",
    icon: Package,
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    value: "10K+",
    label: "Happy Customers",
    icon: Users,
    gradient: "from-purple-400 to-pink-300",
  },
  {
    id: 3,
    value: "30+",
    label: "Countries Served",
    icon: Globe,
    gradient: "from-emerald-400 to-teal-300",
  },
  {
    id: 4,
    value: "4.8",
    label: "Average Rating",
    icon: Star,
    gradient: "from-amber-400 to-orange-300",
  },
];

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 py-12 dark:from-blue-950 dark:via-indigo-950 dark:to-blue-900 md:py-16">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-medium tracking-wide text-white/70">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

