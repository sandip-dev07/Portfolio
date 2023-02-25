import React from "react";

import { data } from "../data/data";

const WorkCard = () => {
  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id} className=" flex flex-col justify-center items-center gap-4 ">
            <a href={data.link}>
            <img
              src={data.img}
              alt={data.title}
              className=" h-[320px] shadow-xl rounded-xl overflow-hidden  sm:h-[260px] hover:scale-105"
            />
            </a>
            <p className=" text-gray-800 text-xl font-medium sm:text-xl">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;
