import Title from "../components/layout/ui/Title"

function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#383838] transition-colors duration-300">
            <div className="container px-4 py-16 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <Title text1={"ABOUT"} text2={"US"} />
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-800 dark:text-gray-200">
                                Welcome to our premier e-commerce destination. We are dedicated to providing an exceptional online shopping experience with a vast selection of high-quality products at competitive prices. Our user-friendly platform makes it easy to find and purchase exactly what you're looking for.
                            </p>
                            <p className="text-lg text-gray-800 dark:text-gray-200">
                                With secure payment options, fast shipping, and excellent customer support, we strive to make your online shopping journey seamless and enjoyable. Our commitment to customer satisfaction ensures that you'll always receive the best service and products.
                            </p>
                        </div>
                        <div className="bg-[#e97730] rounded-lg p-8 text-white">
                            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                            <p className="text-lg">
                                To create a trusted online marketplace that connects customers with quality products, offering a seamless shopping experience while maintaining exceptional customer service and competitive prices.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#2a2a2a]">
                            <h3 className="text-xl font-bold text-[#e97730] mb-3">Customer First</h3>
                            <p className="text-gray-800 dark:text-gray-200">Prioritizing customer satisfaction with every purchase and interaction.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#2a2a2a]">
                            <h3 className="text-xl font-bold text-[#e97730] mb-3">Quality Products</h3>
                            <p className="text-gray-800 dark:text-gray-200">Curating the best selection of products for our customers.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#2a2a2a]">
                            <h3 className="text-xl font-bold text-[#e97730] mb-3">Secure Shopping</h3>
                            <p className="text-gray-800 dark:text-gray-200">Ensuring safe transactions and protecting customer data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About