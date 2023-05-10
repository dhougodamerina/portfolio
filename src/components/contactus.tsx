import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-gray font-thin text-4xl italic">Keep in touch!</h1>
      <span className=" flex gap-5 mt-10 cursor-pointer">
        <a href="https://www.instagram.com/">
          <BsInstagram size={40} />
        </a>
        <a href="https://www.facebook.com/">
          <BsFacebook size={40} />
        </a>
        <a href="https://www.linkedin.com/">
          <BsLinkedin size={40} />
        </a>
      </span>
    </div>
  );
};

export default ContactUs;
