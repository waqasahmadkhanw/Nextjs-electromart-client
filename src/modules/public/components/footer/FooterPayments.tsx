import type { FC } from "react";
import Image from "next/image";

interface PaymentMethod {
  name: string;
  image: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "Visa",
    image: "/images/payments/visa.svg",
  },
  {
    name: "Mastercard",
    image: "/images/payments/mastercard.svg",
  },
  {
    name: "PayPal",
    image: "/images/payments/paypal.svg",
  },
  {
    name: "Stripe",
    image: "/images/payments/stripe.svg",
  },
];

const FooterPayments: FC = () => {
  return (
    <section
      aria-labelledby="footer-payments"
      className="space-y-4"
    >
      <h3
        id="footer-payments"
        className="text-base font-semibold"
      >
        Secure Payments
      </h3>

      <div className="flex flex-wrap items-center gap-3">
        {paymentMethods.map((payment) => (
          <div
            key={payment.name}
            className="flex h-10 w-16 items-center justify-center rounded-md border bg-background p-2"
          >
            <Image
              src={payment.image}
              alt={payment.name}
              width={50}
              height={30}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterPayments;