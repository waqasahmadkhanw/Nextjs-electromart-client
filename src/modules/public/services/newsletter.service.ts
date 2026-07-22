import {
  newsletterApi,
  NewsletterRequest,
} from "../api";


export const newsletterService = {

  subscribe: async (
    payload: NewsletterRequest
  ) => {

    const response =
      await newsletterApi.subscribe(payload);


    return response;
  },

};