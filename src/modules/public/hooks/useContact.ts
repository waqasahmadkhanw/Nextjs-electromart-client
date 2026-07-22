import { useContactMutation } 
from "../mutations";


export const useContact = () => {

  const mutation =
    useContactMutation();


  return {

    sendMessage:
      mutation.mutate,

    sendMessageAsync:
      mutation.mutateAsync,

    isLoading:
      mutation.isPending,

    error:
      mutation.error,

    success:
      mutation.isSuccess,

  };

};