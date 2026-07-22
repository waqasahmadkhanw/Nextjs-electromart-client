import { apiClient } from "@/shared/api";

export const publicApi = {
  getHome: () => apiClient.get("/public/home"),

  getAbout: () => apiClient.get("/public/about"),

  getFAQ: () => apiClient.get("/public/faq"),

  getPrivacy: () => apiClient.get("/public/privacy"),

  getTerms: () => apiClient.get("/public/terms"),
};