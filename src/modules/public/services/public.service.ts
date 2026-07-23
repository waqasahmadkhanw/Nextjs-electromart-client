import { publicApi } from "../api";

export const publicService = {

  getHome: async () => {
    const data = await publicApi.getHome();

    return data;
  },


  getAbout: async () => {
    const data = await publicApi.getAbout();

    return data;
  },


  getFAQ: async () => {
    const data = await publicApi.getFAQ();

    return data;
  },


  getTerms: async () => {
    const data = await publicApi.getTerms();

    return data;
  },


  getPrivacy: async () => {
    const data = await publicApi.getPrivacy();

    return data;
  },

};
