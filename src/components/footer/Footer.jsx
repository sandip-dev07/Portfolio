import React from "react";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleEmailButtonClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // If it's a mobile device, open the default mail client
      window.location.href = "mailto:contact@sandipsarkar.dev";
    } else {
      // If it's not a mobile device, open Gmail in the default browser
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=contact@sandipsarkar.dev",
        "_blank"
      );
    }
  };
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-[#000] h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2
          data-aos="zoom-out"
          className=" font-bold text-5xl sm:text-3xl text-yellow-500"
        >
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.linkedin.com/in/sarkar-sandip/"
            className="box font-medium text-white  flex items-start justify-end gap-1"
          >
            <FaLinkedinIn className=" text-white text-xl hover:scale-125 cursor-pointer" />
            <p>Linkedin</p>
          </a>

          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={handleEmailButtonClick}
            className="box font-medium text-white   flex tems-start justify-center gap-1"
          >
            <MdEmail className=" text-white text-xl hover:scale-125 cursor-pointer" />
            <p>Email</p>
          </button>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://wa.me/9366914025"
            className="box font-medium text-white  flex tems-start justify-center gap-1"
          >
            <IoLogoWhatsapp className=" text-white text-xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
        </div>
        <div className="sm:text-[12px] text-[14px] text-white">
          | Copyright &copy; <span>2024 Sandip. </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
