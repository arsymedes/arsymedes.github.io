import React, { useRef } from "react";
import pp from "../img/pp.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  let yBlue = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  let yRed = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="about" className="pb-20">
      <h2 className="text-8xl font-semibold pb-12 text-gray-700 tiktok-text">
        About
      </h2>
      <div className="grid place-items-center md:block">
        <div ref={ref} className="w-60 md:min-w-[15rem] h-60 md:h-96 box-border md:float-left mr-14  relative">
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
        </div>
        <div className="flex flex-col gap-4 text-xl pt-12 md:pt-0 pb-12">
          <p>
            My name is Ahmad Arsy, and I'm a solution-driven Full Stack Web
            Developer with 1 year of learning experience currently pursuing a
            degree in Physics from University of Indonesia
          </p>
          <p>
            Over the past year, software engineering has developed to be a
            passion of mine, due to the problem solving nature of it. React,
            Python, and Firebase are some of the things I'm proficient at. I am
            excited to collaborate on a team and apply my skills to develop
            applications, and I'm open to learn new things along the way.{" "}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 sm:gap-10">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Front End</h3>
            <ul className="text-2xl pt-4 text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Back End</h3>
            <ul className="text-2xl pt-4 text-gray-700">
              <li>Firebase</li>
              <li>Node JS</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Dev Tools</h3>
            <ul className="text-2xl pt-4 text-gray-700">
              <li>Git</li>
              <li>NPM</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
