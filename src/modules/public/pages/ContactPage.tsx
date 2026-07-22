import {
  PageHeader,
  ContactForm,
  ContactInfo,
} from "../components";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team."
      />

      <ContactInfo />

      <ContactForm />
    </>
  );
}