import {
  Shield,
  Truck,
  HeadphonesIcon,
  RefreshCw,
  CreditCard,
  Award,
} from "lucide-react";

const values = [
  {
    id: 1,
    title: "Quality Assurance",
    description: "Every product is thoroughly tested to meet our high standards.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Enjoy free delivery on all orders above $50.",
    icon: Truck,
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our support team is available around the clock to help you.",
    icon: HeadphonesIcon,
  },
  {
    id: 4,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days of purchase.",
    icon: RefreshCw,
  },
  {
    id: 5,
    title: "Secure Payments",
    description: "Your payment information is encrypted and secure.",
    icon: CreditCard,
  },
  {
    id: 6,
    title: "Best Prices",
    description: "We guarantee competitive prices on all products.",
    icon: Award,
  },
];

export default function AboutValues() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Why Choose Us
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          We are committed to providing an exceptional shopping experience with
          every purchase.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <div
              key={value.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-blue-200 dark:bg-blue-900/30 dark:group-hover:bg-blue-900/50">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

