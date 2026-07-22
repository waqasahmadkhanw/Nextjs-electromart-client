import type { FC } from "react";
import Link from "next/link";

const FooterContact: FC = () => {
  return (
    <section
      aria-labelledby="footer-contact"
      className="space-y-4"
    >
      <h3
        id="footer-contact"
        className="text-base font-semibold"
      >
        Contact Us
      </h3>

      <address className="not-italic space-y-3 text-sm text-muted-foreground">
        <p>
          123 Business Street
          <br />
          New York, NY 10001
        </p>

        <p>
          <Link
            href="tel:+11234567890"
            className="transition-colors hover:text-primary"
          >
            +1 (123) 456-7890
          </Link>
        </p>

        <p>
          <Link
            href="mailto:support@example.com"
            className="transition-colors hover:text-primary"
          >
            support@example.com
          </Link>
        </p>

        <p>
          Monday – Friday
          <br />
          9:00 AM – 6:00 PM
        </p>
      </address>
    </section>
  );
};

export default FooterContact;