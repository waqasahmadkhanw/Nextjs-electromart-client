import { PageHeader } from "../components";
import { FAQList } from "../components/faq";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products and services."
        breadcrumbs={[{ label: "FAQs", href: "/faq" }]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <FAQList />
      </section>

      {/* Still have questions CTA */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-16 dark:border-gray-800 dark:bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Can&apos;t find the answer you&apos;re looking for? Our support team is
              here to help you with any questions or concerns.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md"
            >
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
