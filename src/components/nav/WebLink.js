import React from "react";
import { motion } from "framer-motion";

function WebLink({children, link}) {
  return (
    <motion.a
      className="w-14 h-14 grid place-items-center outline outline-2 outline-black bg-white rounded-[50%]"
      href={link}
      target="_blank"
      whileHover={{filter: "invert(1)", scale: 1.2}}
      whileTap={{filter: "invert(1)", scale: 0.95}}
      transition={{duration: 0.2, ease:"easeOut"}}
    >
      <li className="w-5 h-5">{children}</li>
    </motion.a>
  )
}

export default WebLink