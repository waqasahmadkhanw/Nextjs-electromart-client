import { apiClient } from "@/shared/api";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactApi = {
  sendMessage: (payload: ContactPayload) =>
    apiClient.post("/public/contact", payload),
};