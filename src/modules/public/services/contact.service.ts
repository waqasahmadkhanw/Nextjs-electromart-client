import {
  contactApi,
  ContactRequest,
} from "../api";


export const contactService = {

  sendMessage: async (
    payload: ContactRequest
  ) => {

    const response =
      await contactApi.submit(payload);


    return response;
  },

};