import { PageHeader, ContactForm, ContactInfo } from "../components";
import { Card, CardContent } from "@/shared/components/ui/Card";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team. We'd love to hear from you."
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Send us a Message
            </h2>
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
