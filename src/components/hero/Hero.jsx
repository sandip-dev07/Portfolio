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
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-extrabold sm:text-[2rem]"
            >
              Hello, I am Sandip Sarkar
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Frontend Developer", 1000, "Backend Developer", 1000, "Freelancer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.9rem]"
            >
              I am an undergraduate student at NIT Agartala.{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
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
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
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
        <div className="right relative top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          {/* <div className=" absolute top-[40%] -right-2 w-[50px] h-[50px]">
          <img className=" w-full object-cover" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          </div>
          <div className=" absolute top-[40%] left-1 w-[45px] h-[45px] ">
          <img className=" w-full object-cover" src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"/>
          </div>
          <div className=" absolute top-[80%] left-8 w-[45px] h-[45px] ">
          <img className=" w-full object-cover " src="https://img.icons8.com/color/48/null/python--v1.png"/>
          </div> */}
          <img
            className=" h-[85%] w-fit object-cover md:h-[90%] md:m-auto sm:m-0"
            src={mine}
            alt="mine"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
