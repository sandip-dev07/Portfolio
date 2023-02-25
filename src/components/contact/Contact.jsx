import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className=" container m-auto   mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400">Contact</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      
      {/* card*/}
      <div className=" card-wrapper w-full mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-1 gap-3 flex flex-col">
            <h1 className=" text-6xl font-bold sm:text-4xl">You Need</h1>
            <h3 className=" text-xl sm:text-xl">
              beautiful design for your website leave a request
            </h3>
          </div>
          <div className="flex-1 flex p-5 items-center justify-center">
              <button className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] sm:rotate-90">
                <BsArrowRight/>
              </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            className="flex justify-center items-center flex-col gap-5 w-[80%] sm:w-full"
            action="mailto:"
          >
            <input
              className=" px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="your email"
              name=""
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="name"
              placeholder="your name"
              name=""
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="your message"
              name=""
              id=""
            />
            <button
              className=" bg-text-yellow-500 w-full text-white p-2 rounded-lg"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
