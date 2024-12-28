import React from 'react'
import Title from '../components/layout/ui/Title'
import { Button1 } from '../components/layout/ui/Button'

function Cart() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#383838] py-8">
            <div className="container px-4 mx-auto">
                <Title text1="Welcome to" text2="Cart" />
                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="lg:w-2/3">
                        <div className="p-6 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="flex flex-col items-center py-4 border-b md:flex-row dark:border-gray-700">
                                <img src="https://via.placeholder.com/150" alt="Product" className="object-cover w-24 h-24 rounded" />
                                <div className="flex-grow mt-4 md:ml-4 md:mt-0">
                                    <h2 className="text-lg font-semibold text-[#383838] dark:text-white">Product Name</h2>
                                    <p className="text-gray-600 dark:text-gray-300">Category</p>
                                </div>
                                <div className="flex items-center mt-4 md:mt-0">
                                    <button className="text-[#e97730] hover:text-[#383838] dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <h2 className="text-xl font-semibold mb-4 text-[#383838] dark:text-white">Order Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                                <span className="text-[#383838] dark:text-white font-semibold">PKR 99.99</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                                <span className="text-[#383838] dark:text-white font-semibold">PKR 9.99</span>
                            </div>
                            <hr className="my-4 dark:border-gray-700" />
                            <div className="flex justify-between mb-6">
                                <span className="text-lg font-semibold text-[#383838] dark:text-white">Total</span>
                                <span className="text-lg font-semibold text-[#e97730]">PKR 109.98</span>
                            </div>
                            <Button1 text="Checkout" size="full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart