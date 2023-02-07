import React, { useState, useRef } from "react";
import Input from "./Input";
import resume from "../../CV_Ahmad Arsy.pdf";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <footer
      id="contact"
      className="min-h-screen bg-black px-[10vw] md:px-12 lg:px-32 pt-24 pb-16 text-white relative"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-7xl sm:text-8xl font-semibold pb-12 text-gray-200 tiktok-text"
      >
        Let's Talk
      </motion.h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(375px,100%),1fr))] gap-12">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-3xl font-semibold mb-4"
          >
            Send Me a Message 😉
          </motion.h3>
          {inputs.map((input) => (
            <Input key={input.name} input={input} />
          ))}
          <textarea
            className="h-28 px-4 py-3 text-lg outline-none bg-zinc-700 focus:bg-zinc-800 placeholder:text-zinc-500 shadow-[-6px_6px] shadow-custom-200"
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
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black py-4 text-2xl font-semibold"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-3xl font-semibold mb-9"
          >
            ... Or Contact Me Here!
          </motion.h3>
          <ul className="text-4xl font-semibold grid grid-cols-[repeat(auto-fill,minmax(min(250px,100%),1fr))] gap-10 text-center">
            <li className="group bg-yellow-300">
              <a
                href="mailto:ahmad.arsy.work@gmail.com?subject=Email Through Arsy's Website"
                className="bg-[#64170c] block px-8 py-2 group-hover:bg-[#9d2310] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-100"
              >
                Email
              </a>
            </li>
            <li className="group bg-yellow-300">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahmadarsy/"
                className="bg-[#113e57] block px-8 py-2 group-hover:bg-[#0077b7] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-100"
              >
                Linkedin
              </a>
            </li>
            <li className="group bg-yellow-300">
              <a
                href="https://github.com/arsymedes"
                target="_blank"
                rel="noreferrer"
                className="bg-[#171515] block px-8 py-2 group-hover:bg-[#272121] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-100"
              >
                Github
              </a>
            </li>
            <li className="group bg-yellow-300">
              <a
                target="_blank"
                rel="noreferrer"
                href={resume}
                className="bg-[#3e703b] block px-8 py-2 group-hover:bg-[#67bf63] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-100"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-4 text-sm text-gray-200 text-center left-[50%] translate-x-[-50%]">
        © Copyright 2022, Ahmad Arsy
      </div>
    </footer>
  );
}

export default Contact;
