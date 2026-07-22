import { useQuery } from "@tanstack/react-query";
import { publicService } from "../services";


export const useHomeQuery = () => {

  return useQuery({
    queryKey: ["public-home"],

    queryFn: () =>
      publicService.getHomeData(),

    staleTime: 1000 * 60 * 5,
  });

};