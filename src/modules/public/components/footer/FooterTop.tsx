import type { FC } from "react";

import { FooterNewsletter } from "./FooterNewsletter";

const FooterTop: FC = () => {
  return (
    <section
      aria-labelledby="footer-newsletter"
      className="border-b border-border"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <div className="max-w-xl">
          <h2
            id="footer-newsletter"
            className="text-2xl font-bold tracking-tight"
          >
            Stay Updated
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Subscribe to receive the latest product launches, exclusive offers,
            and special discounts delivered straight to your inbox.
          </p>
        </div>

        <div className="w-full max-w-md">
          <FooterNewsletter />
        </div>
      </div>
    </section>
  );
};

export default FooterTop;