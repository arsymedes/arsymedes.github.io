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
    <section className="h-screen grid place-items-center pt-10 relative z-0">
      <div className="text-4xl font-semibold relative">
        <h1>Hello, I'm Arsy</h1>
        <h1>
          <span>A </span>
          <ReactTextTransition>
            <span className="text-[#24ece7]">{texts[count % texts.length].split(" ")[0]}</span>
            <span> </span>
            <span className="text-[#f7004d]">{texts[count % texts.length].split(" ")[1]}</span>
          </ReactTextTransition>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
