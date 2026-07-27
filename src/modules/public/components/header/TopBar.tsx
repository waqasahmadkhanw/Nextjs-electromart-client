"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden border-b border-border bg-muted lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link
            href="tel:+923441683991"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <span>+923441683991</span>
          </Link>

          <Link
            href="mailto:support@example.com"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            <span>support@example.com</span>
          </Link>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Worldwide Shipping</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/track-order"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Track Order
          </Link>

          <Link
            href="/help"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Help Center
          </Link>

          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;