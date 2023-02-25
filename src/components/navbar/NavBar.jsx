import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import {HiMenu} from 'react-icons/hi'
import {RxCross2} from 'react-icons/rx'

const navItems = [
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = () => {

  const [isOpen, setIsOpen]=useState(true);
  const isNavopen = () => {
    setIsOpen(!isOpen);
  }
  
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` w-screen fixed top-0 py-5 z-10 ${
        scrollPosition > 0 ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div className="logo">
          <a href="#" className=" text-3xl font-bold">
            Portfolio.
          </a>
        </div>
        <div className="  nav-items flex items-center space-x-11">
          <BsFillSunFill className=" cursor-pointer text-xl" />
          <button onClick={isNavopen} className=" cursor-pointer text-2xl hidden sm:block" >
              <HiMenu/>
            </button>
           
            <ul className={`flex items-center space-x-11 ${isOpen? "sm:flex" : "sm:right-[0%]"} sm:flex-col sm:absolute sm:top-0 sm:right-[-100%] sm:w-[350px] sm:h-screen sm:bg-white`}>

            <button onClick={isNavopen} className={`text-3xl hidden sm:block relative right-0 top-4 container mx-auto`}>
                <RxCross2/>
            </button>
            {navItems.map((item) => (
              <li key={item.id} className="sm:m-5 sm:flex sm:gap-6 sm:items-center sm:justify-center">
                <a onClick={isNavopen}
                  href={`#${item.name}`}
                  className=" uppercase cursor-pointer text-black font-bold"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-8 py-3 rounded-lg font-bold sm:m-5 sm:block sm:mx-auto sm:w-fit"
            >
              HIRE ME
            </a>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
