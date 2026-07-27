import { PageHeader, ContactForm, ContactInfo } from "../components";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team. We'd love to hear from you."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-gray-800/60 dark:bg-gray-950 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
