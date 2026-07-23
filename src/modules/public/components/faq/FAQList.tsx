"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/cn";

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
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "overflow-hidden rounded-xl border transition-all duration-200",
            activeId === item.id && "border-primary/30 shadow-sm"
          )}
        >
          <button
            type="button"
            onClick={() => toggleFAQ(item.id)}
            className={cn(
              "flex w-full items-center justify-between px-6 py-4 text-left transition-colors",
              "hover:bg-gray-50 dark:hover:bg-gray-800/50",
              activeId === item.id && "bg-gray-50/50 dark:bg-gray-800/30"
            )}
            aria-expanded={activeId === item.id}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="pr-4 font-medium text-gray-900 dark:text-gray-100">
              {item.question}
            </span>

            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200",
                activeId === item.id && "rotate-180 text-primary"
              )}
            />
          </button>

          <div
            id={`faq-answer-${item.id}`}
            role="region"
            className={cn(
              "overflow-hidden transition-all duration-200",
              activeId === item.id
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="border-t px-6 py-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
