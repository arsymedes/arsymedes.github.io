import React from "react";

function About() {
  return(
    <section className="sm:px-32 pb-8">
      <h2 className="sm:text-7xl font-semibold text-gray-800">About</h2>
      <div className="flex flex-col gap-4 pt-10 pb-8 text-xl">
        <p>My name is Ahmad Arsy, and I'm a solution-driven Full Stack Web Developer with 1 year of learning experience currently pursuing a degree in Physics from University of Indonesia</p>
        <p>Over the past year, software engineering has developed to be a passion of mine, due to the problem solving nature of it. React, Tailwind CSS, Python, and Firebase are some of the things I'm proficient at. I am excited to collaborate on a team and apply my skills to develop applications, and I'm open to learn new things along the way. </p>
      </div>
      <div className="flex flex-wrap sm:gap-12">
        <div>
          <h3 className="text-3xl font-semibold text-gray-800">Front End</h3>
          <ul className="text-2xl pt-4 text-gray-700">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Jest</li>
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
    </section>
  )
}

export default About