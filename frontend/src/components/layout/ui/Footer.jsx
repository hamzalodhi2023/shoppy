import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <footer className="py-8 text-white dark:bg-[#383838]">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="mb-4 md:mb-0">
                        <h3 className="mb-4 text-xl font-bold text-[#e97730]">About Us</h3>
                        <p className="text-[#383838] dark:text-white text-justify">Shoppy is your ultimate destination for the latest trends, timeless styles, and unique pieces. From chic fashion to must-have accessories, we handpick every item to bring you top-quality products that suit your lifestyle.</p>
                    </div>
                    <div className="pl-0 mb-4 md:pl-20 md:mb-0">
                        <h3 className="mb-4 text-xl font-bold text-[#e97730]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} text-[#383838] transition-colors hover:text-[#e97730]`}>Home</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} text-[#383838] transition-colors hover:text-[#e97730]`}>Blog</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => `${isActive ? "dark:text-[#e97730] border-[#e97730] border-b-[2px] text-[#e97730]" : "dark:text-white"} text-[#383838] transition-colors hover:text-[#e97730]`}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-[#e97730]">Contact Info</h3>
                        <div className="space-y-2 text-[#383838] dark:text-white">
                            <p>
                                <a href="mailto:hamzalodhi2023@gmil.com"><b> Email: </b> contact@shoppy.com</a>
                            </p>
                            <p>
                                <a href="tel:(123) 456-7890"><b> Phone: </b> (123) 456-7890</a>
                            </p>
                            <p><b> Address: </b> 123 Street Name, City, Country</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 mt-8 text-center text-[#383838] dark:text-white border-t border-gray-800 dark:border-white">
                    <p>© {new Date().getFullYear()} Shoppy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer