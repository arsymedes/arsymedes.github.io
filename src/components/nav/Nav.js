import React from "react";
import Github from "./Github";
import Linkedin from "./Linkedin";
import WebLink from "./WebLink"

function Nav() {
  return (
    <nav className="h-screen w-[20rem] justify-center flex flex-col items-center gap-24 text-white bg-black">
      <ul className="flex flex-col gap-6 items-center font-semibold spacing text-3xl">
        <li>Home</li>
        <li>Story</li>
        <li>Projects</li>
        <li>Dreams</li>
      </ul>
      <ul className="flex gap-8">
        <WebLink link="https://github.com/arsymedes"><Github /></WebLink>
        <WebLink link="https://www.linkedin.com/in/ahmadarsy/"><Linkedin /></WebLink>
      </ul>
    </nav>
  );
}

export default Nav;
