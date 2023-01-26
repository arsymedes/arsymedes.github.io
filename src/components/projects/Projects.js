import React from "react";
import cv from "../../img/cv.png";
import shop from "../../img/shop.png";
import waldo from "../../img/waldo.png";
import weather from "../../img/weather.png";

function Projects() {
  return (
    <section className="px-12 md:px-32 pb-8">
      <h2 className="text-8xl font-semibold pb-12 text-gray-900 tiktok-text">
        Projects
      </h2>
      <article>
        <div className="grid grid-cols-12 place-items-center">
          <div className="col-start-1 col-end-9 row-start-1 row-end-[-1] z-10 flex flex-col gap-4">
            <h3 className="text-3xl font-semibold">
              <span className="bg-violet-700 text-white px-4 py-1">Resume Builder</span>
            </h3>
            <p className="text-lg bg-slate-800 text-white px-8 py-6 shadow-[-8px_-8px_0px_0px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
            <ul className="flex gap-4 flex-wrap text-white text-sm">
              <li className="bg-green-950 px-3 py-1 rounded-3xl">ReactJS</li>
              <li className="bg-green-950 px-3 py-1 rounded-3xl">DaisyUI</li>
              <li className="bg-green-950 px-3 py-1 rounded-3xl">JavaScript</li>
            </ul>
          </div>
          <div className="col-start-6 col-end-[-1] row-start-1 row-end-[-1] shadow-[16px_16px_0px_0px] shadow-yellow-300">
            <img src={cv} alt="Resume Builder Screenshot" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
