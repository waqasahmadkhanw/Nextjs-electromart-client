import { useQuery } from "@tanstack/react-query";
import { publicService } from "../services";


export const useFAQQuery = () => {

  return useQuery({
    queryKey: ["public-faq"],

    queryFn: () =>
      publicService.getFAQData(),

    staleTime: 1000 * 60 * 30,
  });

};