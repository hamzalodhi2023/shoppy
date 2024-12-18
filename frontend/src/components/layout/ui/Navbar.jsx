import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Button1 } from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { RiShutDownLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  const clearToken = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-[#383838]">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <span
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <span className="self-center whitespace-nowrap text-3xl font-bold text-[#e97730]">
            SHOPPY
          </span>
        </span>
        <div className="flex items-center gap-5 md:order-2">
          {/* dark theme button */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                setIsDark(!isDark);
                isDark
                  ? localStorage.setItem("darkMode", "true")
                  : localStorage.setItem("darkMode", "false");
              }}
              className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#d1d5db9a] backdrop-blur-lg"
            >
              {localStorage.getItem("darkMode") === "true" ? (
                <MdLightMode className="text-[#383838]" size={24} />
              ) : (
                <MdDarkMode className="text-[#383838]" size={24} />
              )}
            </button>
          </div>
          {/* Avtor button */}
          <div className={` ${localStorage.getItem("token") ? "relative" : "hidden"} relative group`}>
            <div className="w-8 overflow-hidden rounded-full cursor-pointer ring-[#e97730] ring-offset-[#ffff] dark:ring-offset-[#383838] ring ring-offset-2">
              <img src="https://thispersondoesnotexist.com/" />
            </div>
            <div className="absolute right-0 z-40 hidden pt-4 shadow-md group-hover:block dropdown-menu ">
              <div className="flex flex-col gap-2 px-5 py-3 font-medium rounded dark:bg-[#2a2a2a] dark:text-white text-[#383838] w-36 bg-slate-100">
                <p className="cursor-pointer hover:text-[#e97730] flex items-center justify-start gap-3" onClick={() => navigate("/user-settings")}><IoSettings /> Settings </p>
                <p className="cursor-pointer hover:text-[#e97730] flex items-center justify-start gap-3"><AiFillProduct /> Orders</p>
                <p className="flex items-center justify-start gap-3 text-red-500 cursor-pointer hover:text-red-400" onClick={clearToken}><RiShutDownLine /> Sign Out</p>
              </div>
            </div>
          </div>
          {/* Cart button */}
          <div className="indicator">
            <span className="indicator-item bg-[#e97730] border-none text-white badge badge-sm">30</span>
            <NavLink to="/cart" className={({ isActive }) => `${isActive ? "text-[#e97730] dark:text-[#e97730]" : "dark:text-[#94969a]"} text-3xl text-[#383838]`}>
              <FaBagShopping />
            </NavLink>
          </div>
          <Button1 className={`${localStorage.getItem("token") ? "hidden" : "block"}`} onclick={() => navigate("/signin")} text="Sign In" size={"fit"} >

          </Button1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
        <div className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${isOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:mt-0 md:flex-row md:space-x-8">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-[2px] border-[#e97730] text-[#e97730] dark:text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-[2px] border-[#e97730] text-[#e97730] dark:text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-[2px] border-[#e97730] text-[#e97730] dark:text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-[2px] border-[#e97730] text-[#e97730] dark:text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "border-b-[2px] border-[#e97730] text-[#e97730] dark:text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
