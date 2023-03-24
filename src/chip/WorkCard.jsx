import React from "react";
import { data } from "../data/data";

const WorkCard = () => {
  const reversedData = [...data]
    .filter((item, id) => id !== 1 && id !== 3 && id!=4)
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
            <a href={data.link}>
              <img
                src={data.img}
                alt={data.title}
                className="h-[280px] w-[380px] shadow-xl rounded-xl overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto hover:scale-105"
              />
            </a>
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
