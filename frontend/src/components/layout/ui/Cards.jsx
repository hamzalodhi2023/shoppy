import React from 'react'

function Cards() {
    return (
        <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-[#383838] dark:border-[#e97730] dark:border-[1px]">
            <div className="group relative w-full bg-green-700 rounded-xl h-[75%] overflow-hidden mb-5">
                <img src="../../public/images/8.webp" alt="Product" className="absolute object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110" />
                <img src="../../public/images/3.webp" alt="Product" className="absolute object-cover w-full h-full transition-all duration-500 group-hover:opacity-0" />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-5 bg-[#38383885] rounded-xl opacity-0 group-hover:z-10 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-[#e97730] text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                    <button className="bg-[#e97730] text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#383838] dark:text-white transition-colors duration-300 hover:text-[#e97730]">Product Name</h3>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">Description of the product</p>
            <div className="flex items-center justify-between mt-auto">
                <span className="text-[#e97730] font-bold text-lg sm:text-xl animate-pulse">PKR 99.99</span>
            </div>
        </div>
    )
}

export default Cards