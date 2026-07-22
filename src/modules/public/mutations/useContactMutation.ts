import { useMutation } from "@tanstack/react-query";
import { contactService } from "../services";
import type { ContactRequest } from "../api";


export const useContactMutation = () => {

  return useMutation({

    mutationFn: (
      payload: ContactRequest
    ) =>
      contactService.sendMessage(payload),


    onSuccess: () => {
      console.log(
        "Message sent successfully"
      );
    },


    onError: (error) => {
      console.error(
        error
      );
    },

  });

};