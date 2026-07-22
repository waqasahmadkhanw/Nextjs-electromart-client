import { useQuery } from "@tanstack/react-query";
import { publicService } from "../services";


export const useAboutQuery = () => {

  return useQuery({
    queryKey: ["public-about"],

    queryFn: () =>
      publicService.getAboutData(),

    staleTime: 1000 * 60 * 10,
  });

};