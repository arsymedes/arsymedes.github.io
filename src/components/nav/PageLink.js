import React from "react";
import { motion } from "framer-motion";

function PageLink({ children, link }) {
  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0.7 },
  };

  return (
    <motion.a
      href={link}
      className="bg-gradient-to-l px-3 py-1 from-black to-white bg-[length:201%_100%] bg-right hover:bg-left hover:text-black transition-all duration-[750ms] ease-in-out"
      style={{
        "--tw-gradient-stops":
          "var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%",
      }}
      variants={variants}
      whileHover={{scale: 1.2}}
    >
      <li>{children}</li>
    </motion.a>
  );
}

export default PageLink;
