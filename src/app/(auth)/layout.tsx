import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
