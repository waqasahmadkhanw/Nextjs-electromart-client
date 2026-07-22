import { useMutation } from "@tanstack/react-query";
import {
  newsletterService
} from "../services";

import type {
  NewsletterRequest
} from "../api";


export const useNewsletterMutation = () => {

  return useMutation({

    mutationFn: (
      payload: NewsletterRequest
    ) =>
      newsletterService.subscribe(
        payload
      ),


    onSuccess: () => {
      console.log(
        "Subscribed successfully"
      );
    },


    onError: (error) => {
      console.error(
        error
      );
    },

  });

};