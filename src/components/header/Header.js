import React from "react";
import NavButton from "./NavButton";
import logoBlack from "../../img/logo-black.png";
import { motion } from "framer-motion";

function Header({ isNavOpen, setNavOpen }) {
  return (
    <header className="fixed w-full pt-8 px-8 flex justify-between items-center">
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        className="w-12 h-12"
        href="https://arsymedes.github.io"
      >
        <img className="w-full h-full" src={logoBlack} alt="" />
      </motion.a>
      <button className="z-10" onClick={() => setNavOpen(!isNavOpen)}>
        <NavButton isOpen={isNavOpen} />
      </button>
    </header>
  );
}

export default Header;
