import {
  useNewsletterMutation
} from "../mutations";


export const useNewsletter = () => {

  const mutation =
    useNewsletterMutation();


  return {

    subscribe:
      mutation.mutate,

    subscribeAsync:
      mutation.mutateAsync,

    isLoading:
      mutation.isPending,

    error:
      mutation.error,

  };

};