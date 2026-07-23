import {
  contactApi,
  ContactPayload,
} from "../api";


export const contactService = {

  sendMessage: async (
    payload: ContactPayload
  ) => {

    const response =
      await contactApi.sendMessage(payload);


    return response;
  },

};
