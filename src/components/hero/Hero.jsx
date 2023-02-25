import React from "react";
import mine from "../../assets/mine-min.png";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = () => {
  return (
    <div className="  bg-gradient-to-r from-green-200 to-blue-200  bg-[]">
      <div className=" container mx-auto pt-5  flex h-[100vh] sm:flex-col-reverse ">
        <div className="left mt-4 flex-1 flex flex-col justify-center gap-5 w-1/2 sm:w-[100%]">
          <div className="info w-fit flex flex-col items-start justify-center gap-1">
            <h2 className=" text-5xl font-extrabold sm:text-[2.15rem]">
              Hello, I am Sandip Sarkar
            </h2>
            <TypeWriterEffect
              className="sm:text-[1rem]"
              textStyle={{
                color: "#fbbd04",
                fontWeight: 600,
                fontSize: "2.3rem",
              }}
              startDelay={0}
              cursorColor="#3F3D56"
              multiText={["Web Developer"]}
              multiTextDelay={1000}
              typeSpeed={130}
              multiTextLoop
            />
            <p className=" text-[1.1rem] font-medium w-3/4 text-gray-500">
              I'm a UG student of NIT Agartala.{" "}
            </p>
          </div>
          <div className="buttons flex gap-5">
            <button className=" bg-black text-[1rem] text-white px-10 py-2 rounded-lg font-bold hover:bg-white hover:text-black">
              <span> Hire Me</span>
            </button>
            <a
              href=""
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 rounded-lg font-bold hover:bg-black hover:text-white"
            >
              <span className="flex items-center gap-1">
                Resume <FiDownload />
              </span>
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
            className="h-[86%] object-cover hover:scale-100"
            src={mine}
            alt="mine"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
