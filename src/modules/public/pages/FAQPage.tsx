import { PageHeader } from "../components";
import { FAQList } from "../components/faq";

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products and services."
      />

      <section className="container mx-auto px-4 py-12">
        <FAQList />
      </section>
    </>
  );
}
