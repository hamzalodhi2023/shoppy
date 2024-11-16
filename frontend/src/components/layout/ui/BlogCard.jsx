import React from 'react'

function BlogCard({ image }) {
    return (
        <div className="flex-1 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#383838] dark:border dark:border-gray-700">
            <div className="relative">
                <a href="#"><img src={image} alt="" className="object-cover w-full h-64" /></a>
                <div className="absolute px-4 py-2 text-center bg-[#e97730] rounded-lg top-4 right-4 text-white">
                    <span className="block text-2xl font-bold">27</span>
                    <span className="block text-gray-200">Aug</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold"><a href="#" className="hover:text-[#e97730] text-[#383838] dark:text-white dark:hover:text-[#e69a6b]">Molestias vel facilis repellendus.</a></h3>
                <div className="flex mb-4 space-x-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex items-center"><i className="mr-2 fa fa-comment"></i>Comments: 4</span>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel facilis repellendus necessitatibus...</p>
                <a href="#" className="inline-block text-sm font-medium text-[#e97730] hover:text-[#e97730]/80">READ MORE</a>
            </div>
        </div>
    )
}

export default BlogCard