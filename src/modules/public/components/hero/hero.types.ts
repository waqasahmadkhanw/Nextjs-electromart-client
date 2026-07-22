/**
 * Hero Feature Types
 */

export interface HeroButton {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: number;
  badge?: string;
  title: string;
  description: string;
  image: string;
  primaryButton: HeroButton;
  secondaryButton?: HeroButton;
}

export interface HeroContentProps {
  badge?: string;
  title: string;
  description: string;
}

export interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export interface HeroActionsProps {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface HeroNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export interface HeroIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export interface HeroSlideProps {
  slide: HeroSlide;
}

export interface HeroSliderProps {
  initialSlide?: number;
  autoPlay?: boolean;
}