import { useFAQQuery } from "../queries";


export const useFAQ = () => {

  const {
    data,
    isLoading,
    error,
  } = useFAQQuery();


  return {

    faqs: data,

    isLoading,

    error,

  };

};