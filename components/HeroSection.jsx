"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-16">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-pink-400 mb-4 text-2xl sm:text-4xl lg:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Hello, I&apos;m {""}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kristen Roggero",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a web developer",
                1000,
                "an artist",
                1000,
                "and an optimist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-pink-200 mb-6 sm:text-lg">
            A developer, tech enthusiast, and crochet artist!
          </p>
          <div className="mb-6">
            <button className="mb-6 p-2 py-2 px-5 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-primary to-secondary text-dark border-4 border-white font-semibold">
              Contact Me
            </button>
            <button className="p-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-secondary to-primary text-primary font-primary">
              <span className="block bg-dark hover:bg-l1 rounded-full px-5 py-2">
                <Link href="/resume">Check out my resume</Link>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="border-4 border-green-200 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform rotate-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/Portrait.png"
              alt="portrait image"
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
