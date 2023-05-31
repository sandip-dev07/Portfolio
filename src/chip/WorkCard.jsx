import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from 'react-icons/rx'
import { AiOutlineGithub } from 'react-icons/ai'
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data]
    .filter((item, id) => id !== 1 && id != 4)
    .reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className='img-content relative'>
              <img
                src={data.img}
                alt={data.title}
                className="h-[280px] w-[380px] shadow-xl rounded-xl overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto "
              />
              <div className='popup h-[280px] w-fit shadow-xl rounded-xl overflow-hidden sm:h-[260px] sm:w-[92%] p-4' >
                <p className=" text-gray-500 text-base leading-[1.4] text-justify">{data.desc}</p>
                <div className=" flex items-center justify-center gap-4">
                  <Link to={data.link} target="_blank" className=" bg-gray-100 mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium">
                    <RxExternalLink />
                    <p>Demo</p>
                  </Link>
                  <Link to={data.git} target="_blank" className=" bg-gray-100 mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium">
                    <AiOutlineGithub />
                    <p>Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
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
  .popup{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: .5s ease;
    background-color: #fff;
  }
  &:hover .popup{
    opacity: 1;
  }
`