import React from "react";

function Cards() {
  return (
    <div className="min-h-[400px] w-[250px] transform rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-[1px] dark:border-[#e97730] dark:bg-[#383838] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
      <div className="group relative mb-5 h-[75%] w-full overflow-hidden rounded-xl bg-green-700">
        <img
          src="/images/8.webp"
          alt="Product"
          className="absolute h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <img
          src="/images/3.webp"
          alt="Product"
          className="absolute h-full w-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-5 rounded-xl bg-[#38383885] opacity-0 transition-all duration-500 group-hover:z-10 group-hover:opacity-100">
          <button className="transform rounded-full bg-[#e97730] p-3 text-white transition-all duration-300 hover:rotate-6 hover:scale-110 hover:bg-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button className="transform rounded-full bg-[#e97730] p-3 text-white transition-all duration-300 hover:rotate-6 hover:scale-110 hover:bg-opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[#383838] transition-colors duration-300 hover:text-[#e97730] dark:text-white">
        Product Name
      </h3>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
        Description of the product
      </p>
      <div className="mt-auto flex items-center justify-between">
        <span className="animate-pulse text-lg font-bold text-[#e97730] sm:text-xl">
          PKR 99.99
        </span>
      </div>
    </div>
  );
}

export default Cards;
