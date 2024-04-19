import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../fonts/stylesheet.css";
import Dropdown from "./Dropdown";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



export default function Navbar() {
  function clickhandler(){
    if(open == true){
        setopen(false);
    }
    else{
        setopen(true);
    }
  }
  const [open , setopen] = useState(false)
  return (
    <header className="shadow fixed w-screen z-50 top-0 backdrop-filter backdrop-blur-lg bg-opacity-05">
      <nav className=  {` ${open ? `top-20 ` :`top-[-500px]`}`}>
        <div className="flex xl:flex-row flex-col flex-wrap md:justify-between  items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center Apercu-Pro-Bold font-extrabold"
          >
            <img src={Logo} className="mr-3 h-16" alt="Logo" />
          </Link>

            <div className="text-3xl absolute text-white right-2 top-6 cursor-pointer xl:hidden">
                <button onClick={clickhandler}>
                    {open ? <IoMdClose/>: <IoMdMenu/>}
                </button>
            </div>

          <div className="items-center lg:order-2 ">
            <Link
              to="/contact"
              className="Grotesk-Black text-black  transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#1779f4] hover:bg-yellow-500 rounded-md text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="Grotesk-Normal flex flex-col mt-4 text-base lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-300" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                    }
                  >
                    <Dropdown/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
