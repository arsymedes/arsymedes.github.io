import React, { useRef } from "react";
import Github from "./Github";
import Link from "./Link";
import { motion, useScroll, useTransform } from "framer-motion";

function Project({
  img,
  title,
  codeLink,
  appLink,
  children,
  techs,
  right = false,
}) {
  techs = techs || [];
  const posText = right ? "md:col-start-5 col-end-[-1]" : "md:col-end-9";
  const posImg = right ? "md:col-end-8" : "md:col-start-6";

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
      viewport={{ once: true, amount: 0.2 }}
      ref={ref}
      className="grid grid-cols-12 place-items-center"
    >
      <div
        className={`col-start-1 ${posText} col-end-[-1] row-start-1 row-end-[-1] z-10 flex flex-col items-start gap-4 px-8 py-8 md:p-0`}
      >
        <h3 className="text-3xl font-semibold bg-yellow-300 px-4 py-2">
          {title}
        </h3>
        <p className="text-md md:bg-slate-800 text-white md:px-8 md:py-6 md:shadow-xl">
          {children}
        </p>
        <ul className="flex gap-4 flex-wrap text-white text-sm">
          {techs.map((tech) => (
            <li key={tech} className="bg-green-950 px-3 py-1 rounded-3xl">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href={appLink}
            target="_blank"
            rel="noreferrer"
            className="bg-custom-100 group"
          >
            <div className="bg-custom-200 group-hover:bg-red-700 font-semibold flex items-center gap-2 text-white px-3 py-2 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-100">
              Live Preview
              <div className="w-8 h-8 ">
                <Link />
              </div>
            </div>
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-custom-100 group"
          >
            <div className="bg-custom-200 group-hover:bg-red-700 font-semibold flex items-center gap-2 text-white px-3 py-2 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-100">
              View Code
              <div className="w-8 h-8">
                <Github />
              </div>
            </div>
          </a>
        </div>
      </div>
      <motion.a
        href={appLink}
        target="_blank"
        className={`col-start-1 ${posImg} col-end-[-1] h-full md:h-auto row-start-1 row-end-[-1] shadow-[16px_16px_0px_0px] shadow-yellow-300 bg-blue-900 outline outline-2`}
        style={{ y }}
      >
        <img
          className="opacity-30 md:opacity-50 hover:md:opacity-100 h-full object-cover transition duration-200"
          src={img}
          alt={`${title} Screenshot`}
        />
      </motion.a>
    </motion.article>
  );
}

export default Project;
