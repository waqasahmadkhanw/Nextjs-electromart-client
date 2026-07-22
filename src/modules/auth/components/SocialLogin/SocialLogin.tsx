"use client";

import Image from "next/image";

export type SocialProvider =
  | "google"
  | "github"
  | "facebook"
  | "apple"
  | "linkedin";

interface SocialProviderItem {
  id: SocialProvider;
  label: string;
  icon: string;
}

interface SocialLoginProps {
  providers?: SocialProviderItem[];
  disabled?: boolean;
  loading?: boolean;
  onProviderClick: (provider: SocialProvider) => void;
}

const DEFAULT_PROVIDERS: SocialProviderItem[] = [
  {
    id: "google",
    label: "Continue with Google",
    icon: "/icons/google.svg",
  },
  {
    id: "github",
    label: "Continue with GitHub",
    icon: "/icons/github.svg",
  },
];

export default function SocialLogin({
  providers = DEFAULT_PROVIDERS,
  disabled = false,
  loading = false,
  onProviderClick,
}: SocialLoginProps) {
  return (
    <div className="space-y-3">
      {providers.map((provider) => (
        <button
          key={provider.id}
          type="button"
          disabled={disabled || loading}
          onClick={() => onProviderClick(provider.id)}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Image
            src={provider.icon}
            alt={provider.label}
            width={20}
            height={20}
          />

          <span>{provider.label}</span>
        </button>
      ))}
    </div>
  );
}