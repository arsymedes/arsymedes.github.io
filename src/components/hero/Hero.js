import React from "react";
import { useState, useEffect } from "react";
import ReactTextTransition from "react-text-transition";

function Hero() {
  const [count, setCount] = useState(0);
  const texts = ["Web Developer", "ML Engineer", "Physics Scholar"];


  // useEffect(() => {
  //   function timeout() {
  //     setTimeout(() => {
  //       setCount((prev) => prev + 1);
  //       timeout()
  //     }, 4000);
  //   }
  //   timeout()
  // }, []);

  return (
    <section className="h-screen grid grid-cols-[4fr_3fr] place-items-center pt-10 relative z-0">
      <div className="text-7xl font-semibold pl-16 relative">
        <h1>Hello, I'm Arsy</h1>
        <h1>
          <span>A </span>
          <ReactTextTransition inline className="text-[#24ece7]">
            {texts[count % texts.length].split(" ")[0]}
          </ReactTextTransition>
          <span> </span>
          <ReactTextTransition inline className="text-[#f7004d]">
            {texts[count % texts.length].split(" ")[1]}{" "}
          </ReactTextTransition>
        </h1>

      </div>
      <div className="text-[550px] font-semibold relative w-[550px] aspect-[1/1] overflow-hidden select-none -z-10">
        <span className="rotate-[10deg] absolute -top-[7.5rem] left-[4.5rem] text-[#24ece7]">
          A
        </span>
        <span className="rotate-[10deg] absolute -top-32 left-24  text-[#f7004d] ">
          A
        </span>
        <span className="rotate-[10deg] absolute -top-[7.5rem] left-20">A</span>
      </div>
    </section>
  );
}

export default Hero;
