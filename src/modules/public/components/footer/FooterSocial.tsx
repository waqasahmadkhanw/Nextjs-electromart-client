import type { FC } from "react";
import Link from "next/link";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterSocialProps {
  links?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "F",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "I",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "T",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "L",
  },
];

const FooterSocial: FC<FooterSocialProps> = ({
  links = defaultSocialLinks,
}) => {
  return (
    <section
      aria-labelledby="footer-social"
      className="space-y-4"
    >
      <h3
        id="footer-social"
        className="text-base font-semibold"
      >
        Follow Us
      </h3>

      <ul className="flex items-center gap-3">
        {links.map((social) => (
          <li key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors hover:bg-primary hover:text-white"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSocial;