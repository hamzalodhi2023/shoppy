import { useEffect, useState } from "react"
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Button1 } from "./Button";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    return (
        <nav className="w-full bg-white border-b border-gray-200 dark:bg-[#383838] dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <span onClick={() => navigate("/")} className="flex items-center cursor-pointer">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#e97730]">Shoppy</span>
                </span>
                <div className="flex md:order-2">
                    <button onClick={() => setIsDark(!isDark)} className="flex items-center justify-center w-10 h-10 mr-2 bg-[#d1d5db9a] rounded-full backdrop-blur-lg">
                        {isDark ? <MdLightMode className="text-[#1d1d1d]" size={24} /> : <MdDarkMode className="text-[#383838]" size={24} />}
                    </button>
                    <Button1 onclick={() => navigate("/signin")} text="Sign In" />
                    <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
                        <li>
                            <NavLink to={"/"} className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`}>Home</NavLink>
                        </li>
                        <li className="relative">
                            <NavLink to={"/shop"} className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"} className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} block py-2 pl-3 pr-4 text-[#383838] hover:text-[#e97730] dark:hover:text-[#e97730] md:p-0`}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar