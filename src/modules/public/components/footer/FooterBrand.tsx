import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBrand: FC = () => {
  return (
    <section
      aria-labelledby="footer-brand"
      className="space-y-5"
    >
      <Link
        href="/"
        aria-label="Go to homepage"
        className="inline-flex items-center"
      >
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={140}
          height={40}
          priority
        />
      </Link>

      <div className="space-y-3">
        <h3
          id="footer-brand"
          className="text-lg font-semibold"
        >
          Your Company
        </h3>

        <p className="text-sm leading-6 text-muted-foreground">
          We provide premium quality products with fast delivery,
          secure payments, and exceptional customer support to
          deliver the best online shopping experience.
        </p>
      </div>
    </section>
  );
};

export default FooterBrand;