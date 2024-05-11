"use client";

import React from "react";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I'm [Your Name]! I am passionate about [Your
        Passion/Hobbies/Interests]. I love to [What you love to do], and I'm
        always eager to learn new things.
      </p>
      <p>
        This website is my platform to share my thoughts, experiences, and
        projects with you. Feel free to explore and reach out to me if you have
        any questions or just want to connect.
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
  );
}

export default AboutMe;
