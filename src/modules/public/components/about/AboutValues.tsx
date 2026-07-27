import {
  Shield,
  Truck,
  HeadphonesIcon,
  RefreshCw,
  CreditCard,
  Award,
} from "lucide-react";
import { cn } from "@/shared/lib/cn";

const values = [
  {
    id: 1,
    title: "Quality Assurance",
    description: "Every product is thoroughly tested to meet our high standards.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Enjoy free delivery on all orders above $50.",
    icon: Truck,
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our support team is available around the clock to help you.",
    icon: HeadphonesIcon,
    gradient: "from-purple-500 to-pink-500",
    lightBg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    id: 4,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days of purchase.",
    icon: RefreshCw,
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    id: 5,
    title: "Secure Payments",
    description: "Your payment information is encrypted and secure.",
    icon: CreditCard,
    gradient: "from-rose-500 to-red-500",
    lightBg: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    id: 6,
    title: "Best Prices",
    description: "We guarantee competitive prices on all products.",
    icon: Award,
    gradient: "from-indigo-500 to-violet-500",
    lightBg: "bg-indigo-50 dark:bg-indigo-950/30",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-gray-50/50 py-12 dark:bg-gray-900/20 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
            What Makes Us <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">Different</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            We are committed to providing an exceptional shopping experience with
            every purchase.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800/60 dark:bg-gray-950"
              >
                {/* Hover gradient overlay */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    value.lightBg
                  )}
                />

                <div className="relative">
                  {/* Icon with gradient */}
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                      value.gradient,
                      "text-white"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

