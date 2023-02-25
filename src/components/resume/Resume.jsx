import React from 'react'

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400">Resume</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Loading...
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper mt-5">
      </div>
    </div>
  )
}

export default Resume