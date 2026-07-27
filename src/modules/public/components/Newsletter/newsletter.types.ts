export interface Benefit {
  icon: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface NewsletterSocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface NewsletterData {
  badge: string;
  title: string;
  description: string;
  benefits: Benefit[];
  placeholder: string;
  buttonLabel: string;
  privacyNote: string;
  trustInfo: string;
  stats: Stat[];
  socialLinks: NewsletterSocialLink[];
}

