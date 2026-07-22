import {
  FOOTER_CONTACT,
  FOOTER_LINKS,
  FOOTER_PAYMENT_METHODS,
  FOOTER_SOCIAL_LINKS,
} from "./footer.constants";

import type {
  FooterContactInfo,
  FooterLinkGroup,
  PaymentMethod,
  SocialLink,
} from "./footer.types";


export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [...FOOTER_LINKS.company],
  },
  {
    title: "Support",
    links: [...FOOTER_LINKS.support],
  },
  {
    title: "Legal",
    links: [...FOOTER_LINKS.legal],
  },
];


export const footerSocialLinks: SocialLink[] =
  FOOTER_SOCIAL_LINKS.map((social) => ({
    name: social.name,
    href: social.href,
  }));


export const footerPaymentMethods: PaymentMethod[] =
  FOOTER_PAYMENT_METHODS.map((payment) => ({
    name: payment.name,
    image: payment.icon,
  }));


export const footerContactInfo: FooterContactInfo = {
  address: FOOTER_CONTACT.address,
  phone: FOOTER_CONTACT.phone,
  email: FOOTER_CONTACT.email,
  workingHours: FOOTER_CONTACT.workingHours,
};