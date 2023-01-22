import React from "react";
import { motion } from "framer-motion";

function WebLink({children, link}) {
  const variants = {
    open: {scale: 1, transition: {duration: 0.5}},
    closed: {scale: 0 }
  }

  return (
    <motion.a
      className="w-14 h-14 grid place-items-center outline outline-2 outline-black bg-white rounded-[50%]"
      href={link}
      target="_blank"
      initial="closed"
      animate="open"
      exit="closed"
      whileHover={{filter: "invert(1)", scale: 1.2, transition:{delay: 0, duration: 0.2, ease:"easeOut"}}}
      whileTap={{filter: "invert(1)", scale: 0.95, transition:{duration: 0.2, ease:"easeOut"}}}
      variants={variants}
    >
      <li className="w-5 h-5">{children}</li>
    </motion.a>
  )
}

export default WebLink