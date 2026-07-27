"use client";

import { motion } from "framer-motion";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background"
    >
      <TopBar />

      {/* Desktop MainHeader - hidden on mobile, MobileMenu handles mobile */}
      <div className="hidden lg:block">
        <MainHeader />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* Mobile Header (replaces desktop navbar on mobile) */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>
    </motion.header>
  );
};

export default Header;

