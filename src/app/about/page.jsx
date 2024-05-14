"use client";

import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-24">
          <h1>About Me</h1>
          <p>
            Hi, I&apos;m Kristen! I am passionate about art, creativity, coding,
            and crochet. I love to meet and talk about art, and I&apos;m always
            eager to learn new things.
          </p>
          <p>
            This website is my platform to share my thoughts, experiences, and
            projects with you. Feel free to explore and reach out to me if you
            have any questions or just want to connect.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript (React, Node.js)</li>
            <li>HTML/CSS</li>
            <li>Git/GitHub</li>
            <li>...</li>
          </ul>
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="#">Project 1</a> - Description of Project 1
            </li>
            <li>
              <a href="#">Project 2</a> - Description of Project 2
            </li>
            <li>
              <a href="#">Project 3</a> - Description of Project 3
            </li>
            {/* Add more projects as needed */}
          </ul>
        </div>
      </div>
    </>
  );
}
