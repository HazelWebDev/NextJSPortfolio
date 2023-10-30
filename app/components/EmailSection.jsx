
"use client"
import React from "react";
import Github from "public/Github.svg";
import Linkedin from "public/Linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useRef } from "react";


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2s7i0rx",
        "template_umi7pei",
        form.current,
        "B_-VcSiGEY9BnUUXT"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-pink-400 my-2">Let's Chat</h5>
        <p className="text-zinc-200 mb-4 max-w-md">
          Connect with me if you want to know miscellaneous facts, like how bees
          take roughly <em>5 to 35 minutes</em> to migrate their entire colony
          when looking for better real estate. Want to know more weird facts?
          Maybe even learn more about web development, or about me? Let's
          connect!
        </p>
        <div className="flex flex-row gap-10"></div>
        <Link href="https://github.com/HazelWebDev">
          <Image src={Github} alt="Github icon"></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/kristen-roggero/">
          <Image src={Linkedin} alt="LinkedIn icon"></Image>
        </Link>
      </div>

      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="text-pink-400 text-xl font-bold">
            Email Me Today!
          </h1>
          <p className="mb-5 text-zinc-200">
            Want to connect? Have any questions? Simply want to leave a comment? You can reach me
            by filing out this form below.
          </p>
          <div className="contact-form">
            {/* <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
            <label
              htmlFor="email"
              className="text-pink-400 block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-zinc-300 border border-white placeholder-zinc-500 text-slate-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="thecoolestdeveloper@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-pink-400 block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              required
              className="bg-zinc-300 border border-white placeholder-zinc-500 text-slate-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="What do you want to talk about?"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-pink-400 block text-sm mb-2 font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-zinc-300 border border-white placeholder-zinc-500 text-slate-400 text-sm rounded-lg block w-full p-2.5 mb-5"            ></textarea>

            <button
              type="submit"
              value="SEND"
              className="bg-pink-400 hover:bg-green-400 font-medium text-white py-2.5 px-5 rounded-lg w-full"
            >
              Send
            </button>
            </div>
            </form> */}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;