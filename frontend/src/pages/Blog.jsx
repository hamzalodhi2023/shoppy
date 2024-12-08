import BlogCard from "../components/layout/ui/BlogCard"
import Title from "../components/layout/ui/Title"

function Blog() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#383838] transition-colors duration-300">
            <div className="container px-4 py-8 mx-auto">
                <Title text1={"ALL"} text2={"BLOGS"} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Card */}
                    <BlogCard image={"/images/blog-1.jpg"} />
                    <BlogCard image={"/images/blog-2.png"} />
                    <BlogCard image={"/images/blog-3.jpg"} />
                </div>
            </div>
        </div>
    )
}

export default Blog