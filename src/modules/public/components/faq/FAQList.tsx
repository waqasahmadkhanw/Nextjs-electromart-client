"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, MessageCircle, Plus, Minus } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQListProps {
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What services do you provide?",
    answer:
      "We provide professional digital solutions including e-commerce development, custom software development, cloud infrastructure, and IT consulting tailored to your business requirements.",
    category: "Services",
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the contact form on this page, email us at support@electromart.com, or call us at +92 344 1683991 during business hours.",
    category: "Support",
  },
  {
    id: 3,
    question: "Do you provide custom solutions?",
    answer:
      "Yes, we specialize in building customized solutions for different business needs. Our team works closely with you to understand your requirements and deliver tailored solutions.",
    category: "Services",
  },
  {
    id: 4,
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. Typically, small projects take 2-4 weeks, medium projects take 1-3 months, and large enterprise solutions may take 3-6 months.",
    category: "Services",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, bank transfers, and digital wallets. All payments are processed securely through encrypted payment gateways.",
    category: "Billing",
  },
  {
    id: 6,
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all our services. If you're not satisfied with the delivered work, we'll work with you to make it right or provide a full refund.",
    category: "Billing",
  },
  {
    id: 7,
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply reach out through our contact form, schedule a free consultation call, and our team will guide you through the onboarding process step by step.",
    category: "Support",
  },
];

const categories = ["All", "Services", "Support", "Billing"];

export default function FAQList({
  items = defaultFAQs,
}: FAQListProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandAll, setExpandAll] = useState(false);

  const toggleFAQ = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const expandAllFAQs = () => {
    if (expandAll) {
      setActiveId(null);
      setExpandAll(false);
    } else {
      setExpandAll(true);
      setExpandAll(false); // We'll handle this differently
    }
  };

  const filteredFAQs = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, activeCategory]);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-gray-200/60 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800/60 dark:bg-gray-950 dark:focus:border-blue-700"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {filteredFAQs.length} {filteredFAQs.length === 1 ? "question" : "questions"} found
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group overflow-hidden rounded-2xl border transition-all duration-300",
                activeId === item.id
                  ? "border-blue-200/80 shadow-md dark:border-blue-800/50"
                  : "border-gray-200/60 hover:border-gray-300/60 dark:border-gray-800/60 dark:hover:border-gray-700/60"
              )}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(item.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors",
                  "hover:bg-gray-50/50 dark:hover:bg-gray-800/30",
                  activeId === item.id && "bg-blue-50/30 dark:bg-blue-950/20"
                )}
                aria-expanded={activeId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex-1">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {item.question}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Category badge */}
                  <span
                    className={cn(
                      "hidden shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide sm:inline-block",
                      item.category === "Services" &&
                        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                      item.category === "Support" &&
                        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                      item.category === "Billing" &&
                        "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                    )}
                  >
                    {item.category}
                  </span>

                  {activeId === item.id ? (
                    <Minus className="h-5 w-5 shrink-0 text-blue-500 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-hover:text-gray-600" />
                  )}
                </div>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                role="region"
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeId === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="border-t border-gray-100 px-6 py-4 dark:border-gray-800">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="mb-3 h-10 w-10 text-gray-300 dark:text-gray-600" />
            <p className="text-base font-medium text-gray-600 dark:text-gray-400">
              No questions found
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
