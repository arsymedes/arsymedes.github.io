import React, { useState, useRef } from "react";
import Input from "./Input";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputs = [
    {
      name: "userName",
      type: "text",
      placeholder: "Full Name",
      value: name,
      setValue: setName,
    },
    {
      name: "userEmail",
      type: "email",
      placeholder: "Email Address",
      value: email,
      setValue: setEmail,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      value: subject,
      setValue: setSubject,
    },
  ];

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <footer className="min-h-screen bg-black px-[10vw] md:px-12 lg:px-32 pt-24 pb-12 text-white">
      <h2 className="text-7xl sm:text-8xl font-semibold pb-12 text-gray-200 tiktok-text">
        Let's Talk
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(400px,100%),1fr))] gap-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <h3 className="text-3xl font-semibold mb-4">Send Me a Message 😉</h3>
          {inputs.map(input => <Input key={input.name} input={input} />)}
          <textarea
            className="h-40 px-4 py-3 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500 shadow-[-6px_6px] shadow-custom-200"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Tell me anything!"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </form>
        <div>
        <h3 className="text-3xl font-semibold mb-4">Or</h3>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
