"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-3 sm:px-3 md:px-3 lg:px-3 mt-16">
        <div className="col-span-7 lg:mt-28 lg:ml-8 p-8 lg:pl-8 place-self-auto sm:text-left">
          <div>
            <h1 className="text-purple-400 mb-4 text-2xl sm:text-4xl lg:text-4xl md:text-center sm:text-center font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary ">
                Hello, I&apos;m {""}
              </span>
              <TypeAnimation
                className=""
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
          </div>
          <p className="text-purple-200 mb-6 sm:text-lg md:text-center sm:text-center">
            A developer, tech enthusiast, and crochet artist!
          </p>
          <div className="mb-6 md:text-center sm:text-center">
            <button className="mb-6 p-2 py-2 px-5 rounded-full w-full sm:w-fit mr-4 border-2 border-white hover:bg-gradient-to-br from-primary to-secondary text-white hover:border-white hover:border-3 hover:text-dark font-semibold">
              Contact Me
            </button>
            <button className="mb-6 p-2 py-2 px-5 rounded-full w-full sm:w-fit mr-4 border-2 border-white hover:bg-gradient-to-br from-primary to-secondary text-white hover:border-white hover:border-3 hover:text-dark font-semibold">
              <span className=" block rounded-full">
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
