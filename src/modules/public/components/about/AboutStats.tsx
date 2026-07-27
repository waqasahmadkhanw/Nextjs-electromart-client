import { Package, Users, Globe, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "50K+",
    label: "Products Sold",
    icon: Package,
  },
  {
    id: 2,
    value: "10K+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    id: 3,
    value: "30+",
    label: "Countries Served",
    icon: Globe,
  },
  {
    id: 4,
    value: "4.8",
    label: "Average Rating",
    icon: Star,
  },
];

export default function AboutStats() {
  return (
    <section className="bg-blue-600 py-12 dark:bg-blue-950 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-medium text-blue-200">
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

