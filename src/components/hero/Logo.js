import React from "react";

function Logo() {
  return (
    <div className="text-[550px] font-semibold relative w-[550px] aspect-[1/1] overflow-hidden select-none -z-10">
      <span className="rotate-[10deg] absolute -top-[7.5rem] left-[4.5rem] text-[#24ece7]">
        A
      </span>
      <span className="rotate-[10deg] absolute -top-32 left-24 text-[#f7004d] ">
        A
      </span>
      <span className="rotate-[10deg] absolute -top-[7.5rem] left-20">A</span>
    </div>
  );
}

export default Logo