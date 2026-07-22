import { useHomeQuery } from "../queries";


export const useHome = () => {

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useHomeQuery();


  return {
    homeData: data,
    isLoading,
    error,
    refetch,
  };

};