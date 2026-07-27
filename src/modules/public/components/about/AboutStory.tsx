import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/Card";

const storyPoints = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To provide high-quality electronics at competitive prices with exceptional customer service. We strive to make technology accessible to everyone.",
    icon: Target,
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To become the most trusted online destination for electronics by delivering innovation, reliability, and a seamless shopping experience.",
    icon: Eye,
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Integrity, customer-centricity, and innovation drive everything we do. We believe in building lasting relationships with our customers.",
    icon: Heart,
  },
];

export default function AboutStory() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Our Story
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
        {storyPoints.map((point) => {
          const Icon = point.icon;

          return (
            <Card key={point.id}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

