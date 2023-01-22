import React from "react";
import { motion } from "framer-motion";

function NavButton({ isOpen = false, lineProps = null, ...props }) {
  const width = 36;
  const height = 36;
  const unitHeight = 1;
  const unitWidth = (unitHeight * width) / height;

  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0, },
    opened: { rotate: 45, translateY: 0.175, stroke: "white" },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0, originX: 0, scale: 0.6 },
    hover: { scale: 1 },
    opened: { rotate: -45, originX: 0.5, translateY: -0.157, stroke: "white" },
  };
  lineProps = {
    stroke: "currentColor",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
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
      animate={variant}
      whileHover="hover"
      className="transition-all duration-200"
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1={1 * unitHeight / 3}
        y2={1 * unitHeight / 3}
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1={2 * unitHeight / 3}
        y2={2 * unitHeight / 3}
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}

export default NavButton;
