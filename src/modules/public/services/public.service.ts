import { publicApi } from "../api";

export const publicService = {

  getHomeData: async () => {
    const data = await publicApi.getHomeData();

    return data;
  },


  getAboutData: async () => {
    const data = await publicApi.getAboutData();

    return data;
  },


  getFAQData: async () => {
    const data = await publicApi.getFAQData();

    return data;
  },


  getTermsData: async () => {
    const data = await publicApi.getTermsData();

    return data;
  },


  getPrivacyData: async () => {
    const data = await publicApi.getPrivacyData();

    return data;
  },

};