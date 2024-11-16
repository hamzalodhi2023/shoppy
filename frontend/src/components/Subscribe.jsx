import React from 'react'

function Subscribe() {
    return (
        <div className="w-full py-16 px-4 bg-white dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="my-4 lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#383838] dark:text-white">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p className="text-[#383838] dark:text-gray-300">Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="p-3 flex w-full rounded-md text-[#383838] outline-none bg-white shadow-md"
                        />
                        <button className="bg-[#e97730] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:scale-105 duration-300">
                            Notify Me
                        </button>
                    </div>
                    <p className="text-[#383838] dark:text-gray-300">
                        We care about the protection of your data. Read our{' '}
                        <span className="text-[#e97730] underline cursor-pointer">Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe