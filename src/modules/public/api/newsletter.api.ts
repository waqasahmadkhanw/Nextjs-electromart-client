import { apiClient } from "@/shared/api";

export interface NewsletterPayload {
  email: string;
}

export const newsletterApi = {
  subscribe: (payload: NewsletterPayload) =>
    apiClient.post("/public/newsletter", payload),
};