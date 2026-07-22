export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}


export interface SocialLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}


export interface PaymentMethod {
  name: string;
  image: string;
}


export interface FooterContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}


export interface FooterNewsletterProps {
  onSubmit?: (email: string) => void;
}


export interface FooterProps {
  className?: string;
}