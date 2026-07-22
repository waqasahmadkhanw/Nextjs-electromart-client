import { useAboutQuery } from "../queries";


export const useAbout = () => {

  const query = useAboutQuery();


  return {
    aboutData: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };

};