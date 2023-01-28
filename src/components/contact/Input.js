import React, { useState } from "react";
import Check from "./Check";
import Cross from "./Cross";

function Input({ input }) {
  const { name, type, placeholder, value, setValue } = input;
  const [focused, setFocused] = useState(false)
  const [valid, setValid] = useState(false)

  function handleFocus() {
    setFocused(true)
  }

  return (
    <div className="relative shadow-[-6px_6px] shadow-custom-200">
      <input
        className="h-8 px-4 py-5 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500 w-full"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValid(e.target.checkValidity())
          setValue(e.target.value);
        }}
        onBlur={handleFocus}
        required
      />
      <div className="w-6 h-6 absolute right-2 top-2">
        {focused && (valid ? <Check /> : <Cross />)}
      </div>
    </div>
  );
}

export default Input;
