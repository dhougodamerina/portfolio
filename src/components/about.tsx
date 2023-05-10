import React from "react";
import DownloadPDF from "./downloadPDF";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h2 className="text-gray font-thin text-3xl mb-10">About Me</h2>
      <p className=" text-lg tracking-normal mx-4">
        Hi there! My name is Amanda Rachel and I&apos;m a junior developer with
        a degree in Computer Science. I have experience in React, Javascript,
        HTML, CSS and I&apos;m eager to continue learning and growing my skills
        as a developer. I&apos;m passionate about coding and love to create
        projects that solve real-world problems. I&apos;m excited to join a team
        of developers where I can contribute my skills and learn from
        experienced developers. When I&apos;m not coding, you can find me
        hiking, reading, or watching movies.
      </p>
      <DownloadPDF />
    </div>
  );
};

export default AboutMe;
