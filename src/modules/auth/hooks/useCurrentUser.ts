import { useMemo } from "react";

import { useAppSelector } from "@/shared/store";

import { selectCurrentUser } from "../store";

export const useCurrentUser = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => user, [user]);
};

export default useCurrentUser;