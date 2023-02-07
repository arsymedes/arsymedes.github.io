import React, { useRef } from "react";
import pp from "../img/pp.webp";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  let yBlue = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  let yRed = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="about" className="pb-20">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-7xl md:text-8xl font-semibold pb-12 text-gray-700 tiktok-text"
      >
        About
      </motion.h2>
      <div className="grid place-items-center md:block">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-60 md:min-w-[15rem] h-60 md:h-96 box-border md:float-left mr-14  relative"
        >
          <motion.div
            className="absolute w-60 md:min-w-[15rem] h-60 md:h-96 left-3 box-border bg-custom-100"
            style={{ y: yBlue }}
          ></motion.div>
          <motion.div
            className="absolute w-60 md:min-w-[15rem] h-60 md:h-96 right-3 box-border bg-custom-200"
            style={{ y: yRed }}
          ></motion.div>
          <div className="overflow-hidden z-10 relative h-full">
            <img src={pp} alt="Arsy" />
          </div>
        </motion.div>
        <div className="flex flex-col gap-4 text-xl pt-12 md:pt-0 pb-12">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 1 }}
          >
            My name is Ahmad Arsy, and I'm a solution-driven Full Stack Web
            Developer with 1 year of learning experience currently pursuing a
            degree in Physics from University of Indonesia
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 1 }}
          >
            Over the past year, software engineering has developed to be a
            passion of mine, due to the problem solving nature of it. React,
            Python, and Firebase are some of the things I'm proficient at. I am
            excited to collaborate on a team and apply my skills to develop
            applications, and I'm open to learn new things along the way.{" "}
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-5 sm:gap-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800">Front End</h3>
            <ul className="text-2xl pt-4 text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800">Back End</h3>
            <ul className="text-2xl pt-4 text-gray-700">
              <li>Firebase</li>
              <li>Node JS</li>
              <li>SQL</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800">Dev Tools</h3>
            <ul className="text-2xl pt-4 text-gray-700">
              <li>Git</li>
              <li>NPM</li>
              <li>Python</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
