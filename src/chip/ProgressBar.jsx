import React from "react";
import styled from "styled-components";

const ProgressBar = ({logo, name, value, duration = 3}) => {
   
  return (
    <div className="flex flex-col gap-2 text-xl font-semibold">
      <div className="flex justify-between">
        <p className="text-[1.15rem] flex items-center gap-2">{logo} {name}</p> <span className=" text-gray-400 text-[1.1rem]">{value}%</span>
      </div>
      <div className="h-[8px] w-[100%] relative rounded-3xl bg-gray-300">
        <Progress className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500" 
              style={{
                width: `${value}%`,
                animation: `progress-animation ${duration}s linear`
              }}>
        </Progress>
      </div>
    </div>
  );
};

export default ProgressBar;

const Progress = styled.span`
  @keyframes progress-animation {
    from { width: 0%; }
    to { width: ${props => props.value}%; }
  }
`;
