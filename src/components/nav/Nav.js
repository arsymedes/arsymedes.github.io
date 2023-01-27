import React from "react";
import Github from "./Github";
import Linkedin from "./Linkedin";
import WebLink from "./WebLink";
import PageLink from "./PageLink";
import { motion, AnimatePresence } from "framer-motion";

function Nav({ isNavOpen }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05 },
    },
  };

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.nav
          className="h-screen fixed w-[20rem] right-0 justify-center flex flex-col items-center gap-24 text-white bg-black z-20"
          initial={{x: 320}}
          animate={{x: 0}}
          exit={{x: 320, transition: {delay: 0.3}}}
          transition={{duration: 1, ease: "easeOut", type: "spring"}}
        >
          <motion.ul
            className="flex flex-col gap-5 items-center font-semibold spacing text-3xl"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <PageLink link="#">Home</PageLink>
            <PageLink link="#projects">Projects</PageLink>
            <PageLink link="#about">About</PageLink>
            <PageLink link="#contact">Contact</PageLink>
          </motion.ul>
          <motion.ul 
            className="flex gap-8" 
          >
            <WebLink link="https://github.com/arsymedes"><Github /></WebLink>
            <WebLink link="https://www.linkedin.com/in/ahmadarsy/"><Linkedin /></WebLink>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Nav;
