function Blog() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#383838] transition-colors duration-300">
            <div className="container px-4 py-8 mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-[#e97730] mb-8">
                    Blog Posts
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Card */}
                    <div className="overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-gray-700 border-[1px] border-[#e97730]">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Blog post"
                            className="object-cover w-full h-48"
                        />
                        <div className="p-6 dark:bg-[#383838]">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-[#e97730] mb-2">
                                Blog Post Title
                            </h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    March 15, 2024
                                </span>
                                <button className="px-4 py-2 bg-[#e97730] text-white rounded-md hover:bg-opacity-90 transition-colors duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Repeat Blog Card */}
                    <div className="overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-gray-700 border-[1px] border-[#e97730]">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Blog post"
                            className="object-cover w-full h-48"
                        />
                        <div className="p-6 dark:bg-[#383838]">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-[#e97730] mb-2">
                                Blog Post Title
                            </h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    March 15, 2024
                                </span>
                                <button className="px-4 py-2 bg-[#e97730] text-white rounded-md hover:bg-opacity-90 transition-colors duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Repeat Blog Card */}
                    <div className="overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-gray-700 border-[1px] border-[#e97730]">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Blog post"
                            className="object-cover w-full h-48"
                        />
                        <div className="p-6 dark:bg-[#383838]">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-[#e97730] mb-2">
                                Blog Post Title
                            </h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    March 15, 2024
                                </span>
                                <button className="px-4 py-2 bg-[#e97730] text-white rounded-md hover:bg-opacity-90 transition-colors duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog