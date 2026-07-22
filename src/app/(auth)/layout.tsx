import { ReactNode } from "react";
import { AuthLayout } from "@/shared/layouts";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}