export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  date: string;
  isVerified: boolean;
}

export interface TestimonialsData {
  badge: string;
  title: string;
  description: string;
  overallRating: number;
  totalReviews: string;
  recommendPercent: number;
  viewAllHref: string;
  testimonials: Testimonial[];
}

