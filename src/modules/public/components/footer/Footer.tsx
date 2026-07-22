import type { FC } from "react";

import { FooterTop } from "./FooterTop";
import { FooterMiddle } from "./FooterMiddle";
import { FooterBottom } from "./FooterBottom";

const Footer: FC = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-background"
    >
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
};

export default Footer;