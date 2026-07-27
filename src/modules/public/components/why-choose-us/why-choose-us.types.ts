export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  badge: string;
  title: string;
  description: string;
  learnMoreHref: string;
  stats: Stat[];
  features: FeatureItem[];
  cta: {
    title: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

