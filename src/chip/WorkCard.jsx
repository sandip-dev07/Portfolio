import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const WorkCard = () => {
  const reversedData = [...data].filter((item, id) => id !== 1).reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col items-cen gap-3 sm:gap-3"
          >
            <POPUP className="img-content relative">
              <div className="h-[250px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer rounded-md overflow-hidden sm:h-[220px] sm:w-[100%] sm:bg-cover mx-auto ">
                <img
                  loading="lazy"
                  src={data.img}
                  alt={data.title}
                  className=" object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup  h-[250px] w-fit shadow-xl rounded-md overflow-hidden sm:h-[220px] sm:w-[100%] p-4`}
              >
                <p className=" text-black text-base leading-[1.4] sm:text-[15.5px] text-justify w-[90%] font-normal">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4 mt-3 sm:mt-1">
                  <Link
                    to={data.link}
                    target="_blank"
                    className=" flex items-center gap-2"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[30px] h-[30px] p-1" />
                    <p className=" text-black">Preview</p>
                  </Link>
                  <br className="w-[2px] bg-white" />

                  {data?.git && (
                    <Link
                      to={data.git}
                      target="_blank"
                      className=" flex items-center gap-2"
                    >
                      <AiOutlineGithub className=" text-black bg-white rounded-full border  w-[30px] h-[30px] p-1" />
                      <p className=" text-black">Code</p>
                    </Link>
                  )}
                </div>
              </div>
            </POPUP>
            <p className="text-black text-start text-[1.1rem] sm:text-[1rem]  sm:text-lg font-poppins     flex items-center gap-2   w-fit p- px-3 rounded-[5px] font-medium">
              <Rocket size={18} />
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
