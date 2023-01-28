import React from "react";
import NavButton from "./NavButton";
import logoBlack from "../../img/logo-black.png";
import { motion } from "framer-motion";

function Header({ isNavOpen, setNavOpen }) {
  return (
    <header className="fixed w-full pt-8 px-8 flex justify-between items-center z-20">
      <motion.a
        whileHover={{ scale: 1.2, rotate: -10 }}
        transition={{ duration: 0.2 }}
        className="w-8 h-8 sm:w-12 sm:h-12 z-50"
        href="https://arsymedes.github.io"
      >
        <img className="w-full h-full" src={logoBlack} alt="" />
      </motion.a>
      <button className="z-50 text-custom-200" onClick={() => setNavOpen(!isNavOpen)}>
        <NavButton isOpen={isNavOpen} />
      </button>
    </header>
  );
}

export default Header;
