import type { FC } from "react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const FooterBottom: FC = () => {
  return (
    <section
      aria-label="Footer Bottom"
      className="border-t border-border"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row">
        <p className="text-muted-foreground">
          © {currentYear} Your Company. All rights reserved.
        </p>

        <nav
          aria-label="Legal Navigation"
          className="flex flex-wrap items-center gap-6"
        >
          <Link
            href="/privacy"
            className="transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="transition-colors hover:text-primary"
          >
            Terms of Service
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default FooterBottom;