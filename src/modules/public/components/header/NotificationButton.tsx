"use client";

import Link from "next/link";
import { Bell } from "lucide-react";

interface NotificationButtonProps {
  unreadCount?: number;
}

const NotificationButton = ({
  unreadCount = 0,
}: NotificationButtonProps) => {
  return (
    <Link
      href="/notifications"
      aria-label="Notifications"
      className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-primary hover:bg-gray-50"
    >
      <Bell className="h-5 w-5" />

      {unreadCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
          {unreadCount > 99 ? "99+" : unreadCount}
        </span>
      )}
    </Link>
  );
};

export default NotificationButton;

