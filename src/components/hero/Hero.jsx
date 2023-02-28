import React from "react";
import mine from "../../assets/mine-min.png";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/SANDIP.pdf";

const Hero = () => {
  return (
    <div className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" w-[90%] mx-auto pt-5 h-[100vh] sm:min-h-[800px] flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 flex-1 flex flex-col justify-center gap-5 w-1/2 sm:w-[100%]">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2 className=" text-5xl font-extrabold sm:text-[2rem]">
              Hello, I am Sandip Sarkar
            </h2>
            <TypeAnimation
              sequence={["Web Developer", 1000, "Freelancer",2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p className=" text-[1.1rem] font-medium w-3/4 text-gray-600 sm:text-[1rem]">
              I am an undergraduate student at NIT Agartala.{" "}
            </p>
          </div>
          <div className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/sarkar-sandip/"
              className=" bg-black text-[1rem] text-white px-10 py-2 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul className=" flex gap-5">
              <li>
                <a href="https://github.com/SandipNITA2025">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sarkar-sandip/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://instagram.com/the_sandip___?igshid=ZDdkNTZiNTM=">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100004767878989">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right relative top-5 flex-1 flex items-center justify-center sm:items-end">
          <img
            className="h-fit w-[90%] object-cover sm:h-fit"
            src={mine}
            alt="mine"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
