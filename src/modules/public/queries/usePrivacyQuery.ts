import { useQuery } from "@tanstack/react-query";
import { publicService } from "../services";


export const usePrivacyQuery = () => {

  return useQuery({
    queryKey: ["public-privacy"],

    queryFn: () =>
      publicService.getPrivacy(),
  });

};
