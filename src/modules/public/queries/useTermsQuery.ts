import { useQuery } from "@tanstack/react-query";
import { publicService } from "../services";


export const useTermsQuery = () => {

  return useQuery({
    queryKey: ["public-terms"],

    queryFn: () =>
      publicService.getTermsData(),
  });

};