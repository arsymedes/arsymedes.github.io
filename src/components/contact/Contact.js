import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(400px,100%),1fr))]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 md:pr-40 "
        >
          <h3 className="text-3xl font-semibold mb-4">Send Me a Message 😉</h3>
          <input
            className="h-8 px-4 py-5 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500"
            type="text"
            name="userName"
            placeholder="Full Name"
            value={name}
            onChange={e => {setName(e.target.value)}}
            required
          />
          <input
            className="h-8 px-4 py-5 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500"
            type="email"
            name="userEmail"
            placeholder="Email Address"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
            required
          />
          <input
            className="h-8 px-4 py-5 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500"
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={e => {setSubject(e.target.value)}}
            required
          />
          <textarea
            className="h-40 px-4 py-3 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Tell me anything!"
            value={message}
            onChange={e => {setMessage(e.target.value)}}
            required
          ></textarea>
        </form>
        <div></div>
      </div>
    </footer>
  );
}

export default Contact;
