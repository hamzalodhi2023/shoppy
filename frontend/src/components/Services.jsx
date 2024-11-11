import { FaBolt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function Services() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-[#383838]">
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-4xl font-bold text-center text-[#383838] dark:text-white">OUR SERVICES</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 transition duration-300 transform bg-white dark:bg-[#383838] dark:border-[1px] dark:border-[#e97730] rounded-lg shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-500 dark:bg-[#e97730] rounded-full">
                            <FaBolt className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold text-center dark:text-white">Fast Delivery</h3>
                        <p className="text-center text-gray-600 dark:text-gray-300">Swift and reliable delivery service to meet your needs.</p>
                    </div>

                    <div className="p-6 transition duration-300 transform bg-white dark:bg-[#383838] dark:border-[1px] dark:border-[#e97730] rounded-lg shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 dark:bg-[#e97730] rounded-full">
                            <FaClock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold text-center dark:text-white">24/7</h3>
                        <p className="text-center text-gray-600 dark:text-gray-300">Round-the-clock service and support whenever you need us.</p>
                    </div>

                    <div className="p-6 transition duration-300 transform bg-white dark:bg-[#383838] dark:border-[1px] dark:border-[#e97730] rounded-lg shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-500 dark:bg-[#e97730] rounded-full">
                            <FaCheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold text-center dark:text-white">Quality Products</h3>
                        <p className="text-center text-gray-600 dark:text-gray-300">Premium quality products that exceed your expectations.</p>
                    </div>

                    <div className="p-6 transition duration-300 transform bg-white dark:bg-[#383838] dark:border-[1px] dark:border-[#e97730] rounded-lg shadow-lg hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500 dark:bg-[#e97730] rounded-full">
                            <FaLock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="mb-4 text-xl font-semibold text-center dark:text-white">Trusted Platform</h3>
                        <p className="text-center text-gray-600 dark:text-gray-300">A secure and reliable platform you can count on.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services