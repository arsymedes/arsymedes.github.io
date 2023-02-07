import React from "react";
import Project from "./Project";
import cv from "../../img/cv.webp";
import shop from "../../img/shop.webp";
import waldo from "../../img/waldo.webp";
import weather from "../../img/weather.webp";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="pb-8 flex flex-col gap-24">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-7xl sm:text-8xl font-semibold text-gray-900 tiktok-text"
      >
        Projects
      </motion.h2>
      <Project
        title="Resume Builder"
        img={cv}
        techs={["React JS", "DaisyUI", "Tailwind CSS", "JavaScript"]}
        codeLink="https://github.com/arsymedes/cv-application"
        appLink="https://arsymedes.github.io/cv-application"
      >
        A simple Resume Builder that outputs an ATS Friendly CV in PDF Format.
        The site accepts inputs regarding general info, work xperience,
        educations, and other skills one possess
      </Project>
      <Project
        title="Weathering with You"
        img={weather}
        techs={["Async JavaScript", "AccuWeather API", "Fetch API"]}
        codeLink="https://github.com/arsymedes/odin-weather-app"
        appLink="https://arsymedes.github.io/odin-weather-app"
        right
      >
        A weather app that allows user to search the weather and time on any
        city on earth. Every type of weather has a custom picked background to
        accompany it.
      </Project>
      <Project
        title="Apple Store"
        img={shop}
        techs={["React JS", "Tailwind CSS", "React Router"]}
        codeLink="https://github.com/arsymedes/shopping-cart"
        appLink="https://arsymedes.github.io/shopping-cart"
      >
        A Frontend clothing store based on the Apple Store. The site allows user
        to browse, add, and remove item from the shopping cart.
      </Project>
      <Project
        title="Among Us"
        img={waldo}
        techs={["React JS", "Tailwind CSS", "Firebase"]}
        codeLink="https://github.com/arsymedes/shopping-cart"
        appLink="https://arsymedes.github.io/shopping-cart"
        right
      >
        A photo tagging game where user needs to find 3 famous characters in a
        photo containing thousands. There are 3 maps to choose from, with
        increasing difficulty.
      </Project>
    </section>
  );
}

export default Projects;
