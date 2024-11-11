function NewArrivals() {
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl dark:text-white">New Arrivals</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-white dark:bg-[#383838] dark:border-[#e97730] dark:border-[1px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="p-4">
                            <img src="https://via.placeholder.com/300" alt="Product" className="object-cover w-full h-48 mb-4 rounded-md" />
                            <h3 className="mb-2 text-xl font-semibold dark:text-white">Product Name</h3>
                            <p className="mb-2 text-gray-600 dark:text-gray-300">Description of the product</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[#e97730] font-bold text-lg">PKR 99.99</span>
                                <button className="bg-[#e97730] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#383838] dark:border-[#e97730] dark:border-[1px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="p-4">
                            <img src="https://via.placeholder.com/300" alt="Product" className="object-cover w-full h-48 mb-4 rounded-md" />
                            <h3 className="mb-2 text-xl font-semibold dark:text-white">Product Name</h3>
                            <p className="mb-2 text-gray-600 dark:text-gray-300">Description of the product</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[#e97730] font-bold text-lg">PKR 99.99</span>
                                <button className="bg-[#e97730] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#383838] dark:border-[#e97730] dark:border-[1px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="p-4">
                            <img src="https://via.placeholder.com/300" alt="Product" className="object-cover w-full h-48 mb-4 rounded-md" />
                            <h3 className="mb-2 text-xl font-semibold dark:text-white">Product Name</h3>
                            <p className="mb-2 text-gray-600 dark:text-gray-300">Description of the product</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[#e97730] font-bold text-lg">PKR 99.99</span>
                                <button className="bg-[#e97730] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#383838] dark:border-[#e97730] dark:border-[1px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="p-4">
                            <img src="https://via.placeholder.com/300" alt="Product" className="object-cover w-full h-48 mb-4 rounded-md" />
                            <h3 className="mb-2 text-xl font-semibold dark:text-white">Product Name</h3>
                            <p className="mb-2 text-gray-600 dark:text-gray-300">Description of the product</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[#e97730] font-bold text-lg">PKR 99.99</span>
                                <button className="bg-[#e97730] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals