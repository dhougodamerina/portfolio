import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-gray font-thin text-3xl mb-10">Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        <Image
          src="/images/test4.png"
          alt="Picture of the author"
          width={"450"}
          height={"450"}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/test3.png"
          alt="Picture of the author"
          width={"450"}
          height={"450"}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/test6.jpg"
          alt="Picture of the author"
          width={"450"}
          height={"450"}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/test3.png"
          alt="Picture of the author"
          width={"450"}
          height={"450"}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/test5.png"
          alt="Picture of the author"
          width={"450"}
          height={"450"}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/test77.jpg"
          alt="Picture of the author"
          width={"450"}
          height={"450"}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Projects;
