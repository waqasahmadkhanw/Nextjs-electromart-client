"use client";

/**
 * -------------------------------------------------------
 * File: shared/providers/ReduxProvider.tsx
 * Description:
 * Global Redux Provider.
 * Makes the Redux store available to the entire application.
 * -------------------------------------------------------
 */

import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@/shared/store/store";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({
  children,
}: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}