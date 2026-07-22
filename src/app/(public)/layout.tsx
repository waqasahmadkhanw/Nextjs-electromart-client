import { ReactNode } from "react";
import { MainLayout } from "@/shared/layouts";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}