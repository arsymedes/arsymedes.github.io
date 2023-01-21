import React from "react";
import { motion } from "framer-motion";

function NavButton({ isOpen = false, lineProps = null, ...props }) {
  const width = 36;
  const height = 12;
  const unitHeight = 10;
  const unitWidth = (unitHeight * width) / height;

  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 5 },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -5 },
  };
  lineProps = {
    stroke: "black",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { ease: "easeOut", duration: 0.5 },
    ...lineProps,
  };

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      whileHover={{fill: "#ffffff"}}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1={unitHeight}
        y2={unitHeight}
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}

export default NavButton;
