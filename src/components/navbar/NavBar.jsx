import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

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

const NavBar = ({toggleDarkMode,darkMode}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle the navbar
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

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
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0
          ? `bg-white shadow-md`
          : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Portfolio.
          </Link>
        </div>
        <div className="nav-items flex items-center space-x-11">
          <BsFillSunFill
            darkMode={darkMode}
            onClick={toggleDarkMode}
            className="cursor-pointer text-xl hidden"
          />
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden sm:block"
          >
            <HiMenu />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "sm:flex" : "sm:right-[0%]"
            } sm:flex-col sm:absolute m-auto sm:top-0 sm:right-[-100%] sm:w-[78%] sm:h-screen sm:bg-white `}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden sm:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="sm:m-6 sm:flex sm:gap-6 sm:items-center sm:justify-center"
              >
                {/* Use Link component instead of a tag for internal links */}
                <a
                  onClick={toggleNav}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600
                  font-bold `}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="https://www.linkedin.com/in/sarkar-sandip/"
              className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 sm:m-5 sm:block sm:mx-auto sm:w-fit lg:px-3"
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
