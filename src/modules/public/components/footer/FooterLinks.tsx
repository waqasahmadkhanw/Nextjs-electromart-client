import type { FC } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks: FC<FooterLinksProps> = ({
  title,
  links,
}) => {
  return (
    <nav
      aria-labelledby={`footer-links-${title}`}
      className="space-y-4"
    >
      <h3
        id={`footer-links-${title}`}
        className="text-base font-semibold"
      >
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;

export type { FooterLink, FooterLinksProps };