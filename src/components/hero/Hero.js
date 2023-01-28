import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTextTransition from "react-text-transition";

function Hero() {
  const [count, setCount] = useState(0);
  const texts = ["Web Developer", "ML Engineer", "Physics Scholar"];

  useEffect(() => {
    function timeout() {
      setTimeout(() => {
        setCount((prev) => prev + 1);
        timeout()
      }, 4000);
    }
    timeout()
  }, []);

  const h1Animate = {
    off: { x: "-100vw" },
    on: { x: 0, transition: { duration: 0.8 } },
  };

  const boxAnimate = {
    off: { x: "100vw" },
    on: { x: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.section initial="off" whileInView="on" viewport={{once: true}} className="h-screen grid items-center z-0">
      <motion.div initial="off" whileInView="on" viewport={{once: true}} transition={{staggerChildren: 0.75}} className="text-7xl sm:text-8xl text-gray-700 font-medium z-10 flex flex-col gap-6">
        <motion.h1 variants={h1Animate}>
          Hello<span className="text-red-600">.</span>
        </motion.h1>
        <motion.h1 variants={h1Animate}>I'm Arsy</motion.h1>
        <motion.h1
          variants={h1Animate}
          className="relative font-semibold w-[105%]"
        >
          <ReactTextTransition className="text-gray-900 tiktok-text">
            {texts[count % texts.length]}
          </ReactTextTransition>
        </motion.h1>
      </motion.div>
      <motion.div variants={boxAnimate} className="absolute w-60 h-60 bg-yellow-300 shadow-[-12px_-12px] shadow-pink-500 -right-32 sm:right-[300px]"></motion.div>
    </motion.section>
  );
}

export default Hero;
