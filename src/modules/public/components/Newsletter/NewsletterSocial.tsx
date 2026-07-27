"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import type { NewsletterSocialLink } from "./newsletter.types";

interface NewsletterSocialProps {
  links: NewsletterSocialLink[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 120 },
  },
};

const NewsletterSocial = ({ links }: NewsletterSocialProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <p className="mb-3 text-sm font-medium text-blue-200">Follow Us</p>
      <div className="flex flex-wrap gap-2">
        {links.map((social) => (
          <motion.div key={social.name} variants={linkVariants}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white hover:shadow-lg"
            >
              {social.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsletterSocial;

