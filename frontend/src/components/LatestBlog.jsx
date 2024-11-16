import React from 'react'
import BlogCard from './layout/ui/BlogCard'
import Title from './layout/ui/Title'

function LatestBlog() {
    return (
        <div className="py-16 dark:bg-[#383838]">
            <div className="container px-4 mx-auto">
                <div className="mb-12 text-center">
                    <Title text1={"LATEST"} text2={"BLOGS"} />
                    <p className="text-gray-600 dark:text-gray-300">There are many variations of passages of Lorem Ipsum available.</p>
                </div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <BlogCard image={"/images/blog-1.jpg"} />
                    <BlogCard image={"/images/blog-2.png"} />
                    <BlogCard image={"/images/blog-3.jpg"} />
                </div>
            </div>
        </div>
    )
}

export default LatestBlog