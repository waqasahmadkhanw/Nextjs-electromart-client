import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQListProps {
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What services do you provide?",
    answer:
      "We provide professional digital solutions according to your business requirements.",
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer:
      "You can contact our support team through email or contact form.",
  },
  {
    id: 3,
    question: "Do you provide custom solutions?",
    answer:
      "Yes, we build customized solutions for different business needs.",
  },
];

export default function FAQList({
  items = defaultFAQs,
}: FAQListProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId((prev) =>
      prev === id ? null : id
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border"
        >
          <button
            type="button"
            onClick={() => toggleFAQ(item.id)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <span className="font-medium">
              {item.question}
            </span>

            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                activeId === item.id
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {activeId === item.id && (
            <div className="border-t p-4 text-sm text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}