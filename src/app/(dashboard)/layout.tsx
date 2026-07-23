import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-gray-50 p-4">
        <nav>
          <h2 className="mb-4 text-lg font-bold">Dashboard</h2>
          <ul className="space-y-2">
            <li><a href="/admin" className="block rounded p-2 hover:bg-gray-200">Admin</a></li>
            <li><a href="/user" className="block rounded p-2 hover:bg-gray-200">User</a></li>
            <li><a href="/profile" className="block rounded p-2 hover:bg-gray-200">Profile</a></li>
            <li><a href="/settings" className="block rounded p-2 hover:bg-gray-200">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
