"use client";

import { motion, type Variants } from "framer-motion";
import { newsletterData } from "./newsletter.data";
import NewsletterHeader from "./NewsletterHeader";
import NewsletterBenefits from "./NewsletterBenefits";
import NewsletterForm from "./NewsletterForm";
import NewsletterSocial from "./NewsletterSocial";
import NewsletterStats from "./NewsletterStats";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const NewsletterSection = () => {
  const {
    badge,
    title,
    description,
    benefits,
    placeholder,
    buttonLabel,
    privacyNote,
    trustInfo,
    stats,
    socialLinks,
  } = newsletterData;

  return (
    <section
      className="relative w-full overflow-hidden bg-background px-4 py-16 sm:py-20 lg:py-24"
      aria-label="Newsletter and community"
    >
      {/* Background Gradient Container */}
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-blue-700 to-indigo-700 p-8 shadow-2xl dark:border dark:border-white/5 sm:p-12 lg:p-16"
        >
          {/* Background Decorative Elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Floating blurred circles */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-indigo-300/5 blur-2xl" />
            
            {/* Decorative rings */}
            <svg
              className="absolute top-0 left-0 h-full w-full opacity-5"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.4" />
              <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="0.3" />
              <circle cx="200" cy="200" r="40" stroke="white" strokeWidth="0.2" />
            </svg>

            {/* Floating shapes */}
            <div className="absolute top-10 right-10 h-3 w-3 rounded-full bg-white/20 animate-pulse" />
            <div className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-blue-300/30 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/3 right-1/4 h-4 w-4 rounded-full bg-indigo-300/20 animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          {/* Main Content Grid */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Content: Header + Benefits + Trust */}
            <div className="space-y-6">
              <NewsletterHeader
                badge={badge}
                title={title}
                description={description}
              />
              <NewsletterBenefits benefits={benefits} />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-blue-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs">
                  👥
                </span>
                {trustInfo}
              </motion.p>
            </div>

            {/* Right Content: Form + Social + Privacy */}
            <div className="space-y-6">
              <NewsletterForm
                placeholder={placeholder}
                buttonLabel={buttonLabel}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xs text-blue-200/80 sm:text-sm"
              >
                {privacyNote}
              </motion.p>
              <NewsletterSocial links={socialLinks} />
            </div>
          </div>

          {/* Community Stats */}
          <NewsletterStats stats={stats} />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

