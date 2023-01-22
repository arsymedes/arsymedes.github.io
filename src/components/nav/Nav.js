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
          className="h-screen fixed right-0 justify-center flex flex-col items-center gap-24 text-white bg-black"
          initial={{width: 0}}
          animate={{width: 320}}
          exit={{width: 0}}
        >
          <motion.ul
            className="flex flex-col gap-5 items-center font-semibold spacing text-3xl"
            animate={isNavOpen ? "open" : "closed"}
            variants={variants}
          >
            <PageLink link="https://arsymedes.github.io">Home</PageLink>
            <PageLink link="https://arsymedes.github.io/story">Story</PageLink>
            <PageLink link="https://arsymedes.github.io/projects">Projects</PageLink>
            <PageLink link="https://arsymedes.github.io/dreams">Dreams</PageLink>
          </motion.ul>
          <motion.ul className="flex gap-8">
            <WebLink link="https://github.com/arsymedes"><Github /></WebLink>
            <WebLink link="https://www.linkedin.com/in/ahmadarsy/"><Linkedin /></WebLink>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Nav;
