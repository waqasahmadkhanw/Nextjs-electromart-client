import { ReactNode } from "react";
import { DashboardLayout } from "@/shared/layouts";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: DashboardLayoutProps) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}