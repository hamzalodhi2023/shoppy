import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/layout/ui/Title'

function Signin() {
    const [isSignUp, setIsSignUp] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#383838] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
                        {isSignUp ? <Title text1={"CREATE"} text2={"ACCOUNT"} /> : <Title text1={"SIGN IN"} text2={"TO YOUR ACCOUNT"} />}
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    {isSignUp && (
                        <div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e97730] hover:bg-[#d66a2b] focus:outline-none dark:focus:border-[#e97730] focus:ring-2 focus:ring-offset-2 focus:ring-[#e97730]"
                        >
                            {isSignUp ? 'Sign up' : 'Sign in'}
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-[#e97730] hover:border-b-[#e97730] dark:border-b-[#2a2a2a] dark:hover:border-b-[#e97730] border-b-white border-b-[1px] hover:text-[#d66a2b] font-medium"
                    >
                        {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signin