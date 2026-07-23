import type { FC } from "react";

import FooterBrand from "./FooterBrand";
// import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterPayments from "./FooterPayments";
import FooterLinks from "./FooterLinks";

const FooterMiddle: FC = () => {
  return (
    <section
      aria-labelledby="footer-content"
      className="border-b border-border"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 id="footer-content" className="sr-only">
          Footer Content
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <FooterBrand />

          <FooterLinks
            title="Shop"
            links={[
              { label: "Products", href: "/products" },
              { label: "Categories", href: "/categories" },
              { label: "Deals", href: "/deals" },
              { label: "New Arrivals", href: "/new-arrivals" },
            ]}
          />

          <FooterLinks
            title="Support"
            links={[
              { label: "Help Center", href: "/help" },
              { label: "Shipping Info", href: "/shipping" },
              { label: "Returns", href: "/returns" },
              { label: "Contact Us", href: "/contact" },
            ]}
          />

          <div className="space-y-8">
            <FooterContact />
            <FooterSocial />
          </div>

          <FooterPayments />
        </div>
      </div>
    </section>
  );
};

export default FooterMiddle;