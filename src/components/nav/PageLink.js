import React from "react";
import { motion } from "framer-motion";

function PageLink({ children, link }) {
  const variants = {
    open: { x: 0, opacity: 1, transition: { duration: 1, type: "spring" } },
    closed: { x: 200, opacity: 0 },
  };

  return (
    <motion.a
      href={link}
      className="px-3 py-1"
      variants={variants}
      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
    >
      <li
        className="bg-gradient-to-l px-3 py-1 from-black to-white bg-[length:201%_100%] bg-right ease-in-out hover:bg-left hover:text-black transition-all duration-[500ms] "
        style={{
          "--tw-gradient-stops":
            "var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%",
        }}
      >
        {children}
      </li>
    </motion.a>
  );
}

export default PageLink;
