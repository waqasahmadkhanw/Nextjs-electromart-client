import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/shared/providers";

// import { AppProvider } from "@/shared/providers/AppProvider";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Template",
    template: "%s | Next.js App Template",
  },

  description: "Professional reusable Next.js application template.",

  applicationName: "Next.js App Template",

  keywords: [
    "Next.js",
    "React",
    "Template",
    "App Router",
    "TypeScript",
  ],

  authors: [
    {
      name: "Your Name",
    },
  ],

  creator: "Your Name",

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Next.js App Template",
    title: "Next.js App Template",
    description: "Professional reusable Next.js application template.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next.js App Template",
    description: "Professional reusable Next.js application template.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}