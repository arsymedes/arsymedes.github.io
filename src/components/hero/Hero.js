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
    <section className="h-screen grid items-center p-[10vw] sm:p-32 z-0 ">
      <div className="text-7xl sm:text-8xl text-gray-700 font-medium flex flex-col gap-6">
        <h1>Hello<span className="text-red-600">.</span></h1>
        <h1>I'm Arsy</h1>
        <h1 className="relative font-semibold w-[105%]">
          <ReactTextTransition className="absolute -top-2 left-2 text-[#24ece7] select-none">
            <span>{texts[count % texts.length].split(" ")[0]}</span>
            <span> </span>
            <span>{texts[count % texts.length].split(" ")[1]}</span>
          </ReactTextTransition>
          <ReactTextTransition className="absolute top-2 -left-2 text-[#f7004d] select-none">
            <span>{texts[count % texts.length].split(" ")[0]}</span>
            <span> </span>
            <span>{texts[count % texts.length].split(" ")[1]}</span>
          </ReactTextTransition>
          <ReactTextTransition className="text-gray-900">
            <span>{texts[count % texts.length].split(" ")[0]}</span>
            <span> </span>
            <span>{texts[count % texts.length].split(" ")[1]}</span>
          </ReactTextTransition>
        </h1>
      </div>
      <div className="absolute w-60 h-60 bg-yellow-300 -z-10 -right-32 sm:right-[300px]"></div>
    </section>
  );
}

export default Hero;
