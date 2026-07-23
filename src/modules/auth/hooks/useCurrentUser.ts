import { useMemo } from "react";

import { useAppSelector } from "@/shared/store";

import { selectAuth } from "../store";

export const useCurrentUser = () => {
  const user = useAppSelector(selectAuth);

  return useMemo(() => user, [user]);
};

export default useCurrentUser;