"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="text-lg font-primary">
          California State University, East Bay
        </li>
        <p className="font-secondary p-1">Bachelor&apos;s Degree in English</p>
        <li className="text-lg mt-4 font-primary">Online Courses</li>
        <p className="font-secondary p-1">
          Certifications in JavaScript, React.js, and responsive web
          development.
        </p>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li className="text-lg">Infosys</li>
        <p className="text-md font-secondary">Front-End Developer</p>
        <li className="text-lg mt-4">Code Bootcamp</li>
        <p className="text-md font-secondary">Full Stack Development</p>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <div className="grid gap-2 grid-cols-2 font-secondary">
          <div>JavaScript</div>
          <div>React.JS</div>
          <div>Next.JS</div>
          <div>TailwindCSS</div>
          <div>Bootstrap</div>
          <div className="grid grid-cols-2 col-span-2">Algorithms</div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mb-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16 sm:items-center">
        <Image
          className="transform rotate-45"
          src="/FlowerLogo1 .png"
          alt="Kristen, but cartoon version"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left">
          <div className="border-b border-secondary inline-block mb-3">
            <h2 className="text-4xl font-bold text-primary px-3 py-2">
              Some of my projects
            </h2>
          </div>
          <p className="text-base md:text-lg font-secondary">
            I am a person of many passions, the most favored being art and
            creativity. This is precisely what called me to front-end
            development: the imaginative synergy between art and technology. The
            overflowing potential of technology collides with creativity,
            resulting in a truly awesome career which called to me. I jumped
            toward it with no hesitation!
          </p>
          <div className="flex flex-row mt-8 sm:text-left pr-4 md:text-lg lg:text-xl">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-left">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
