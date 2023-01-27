import React from "react";
import Github from "./Github";
import Link from "./Link";
import cv from "../../img/cv.png";
import shop from "../../img/shop.png";
import waldo from "../../img/waldo.png";
import weather from "../../img/weather.png";

function Projects() {
  return (
    <section className="pb-8 flex flex-col gap-16">
      <h2 className="text-7xl sm:text-8xl font-semibold pb-12 text-gray-900 tiktok-text">
        Projects
      </h2>
      <article className="grid grid-cols-12 place-items-center">
        <div className="col-start-1 md:col-end-9 col-end-[-1] row-start-1 row-end-[-1] z-10 flex flex-col items-start gap-4 px-8 py-8 md:p-0">
          <h3 className="text-3xl font-semibold bg-yellow-300 px-4 py-2">Resume Builder
          </h3>
          <p className="text-md md:bg-slate-800 text-white md:px-8 md:py-6 md:shadow-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
          </p>
          <ul className="flex gap-4 flex-wrap text-white text-sm">
            <li className="bg-green-950 px-3 py-1 rounded-3xl">ReactJS</li>
            <li className="bg-green-950 px-3 py-1 rounded-3xl">DaisyUI</li>
            <li className="bg-green-950 px-3 py-1 rounded-3xl">Tailwind CSS</li>
            <li className="bg-green-950 px-3 py-1 rounded-3xl">JavaScript</li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="https://arsymedes.github.io/cv-application/"
              target="_blank"
              rel="noreferrer"
              className="bg-custom-200 hover:bg-red-700 font-semibold flex items-center gap-2 text-white px-3 py-2 hover:shadow-[8px_8px] hover:shadow-custom-100 hover:-translate-x-2 hover:-translate-y-2 transition-all duration-100"
            >
              Live Preview
              <div className="w-8 h-8">
                <Link />
              </div>
            </a>
            <a
              href="https://github.com/arsymedes/cv-application"
              target="_blank"
              rel="noreferrer"
              className="bg-custom-200 hover:bg-red-700 font-semibold flex items-center gap-2 text-white px-3 py-2 hover:shadow-[8px_8px] hover:shadow-custom-100 hover:-translate-x-2 hover:-translate-y-2 transition-all duration-100"
            >
              View Code
              <div className="w-8 h-8">
                <Github />
              </div>
            </a>
          </div>
        </div>
        <a
          href="https://arsymedes.github.io/cv-application/"
          className="md:col-start-6 h-full md:h-auto col-start-1 col-end-[-1] row-start-1 row-end-[-1] shadow-[16px_16px_0px_0px] shadow-yellow-300 bg-red-800 md:bg-transparent outline outline-2"
        >
          <img
            className="opacity-20 md:opacity-100 h-full object-cover"
            src={cv}
            alt="Resume Builder Screenshot"
          />
        </a>
      </article>
    </section>
  );
}

export default Projects;
