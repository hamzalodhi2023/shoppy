import React, { useState } from 'react'
import Title from '../components/layout/ui/Title'
import { useCreateUserMutation } from "../api/FetchUsers";
import { Button1 } from "../components/layout/ui/Button";


function Signin() {
    const { mutate: createUser } = useCreateUserMutation();

    //` Sign Up Form Data
    const [signUpData, setSignUpData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
    })

    //` Handle Change Function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpData((prevData) => ({ ...prevData, [name]: value }));
    };

    //` Handle Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(signUpData);

        setSignUpData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobile: "",
        });

    };


    //` For sign in and sign up
    const [isSignUp, setIsSignUp] = useState(false)
    //` For password show and hide
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#383838] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#2a2a2a] p-8 rounded-lg shadow-lg">
                <div>
                    {isSignUp ? <Title text1={"CREATE"} text2={"ACCOUNT"} /> : <Title text1={"SIGN IN"} text2={"TO YOUR ACCOUNT"} />}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 ">
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
                                        value={signUpData.firstName}
                                        onChange={handleChange}
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
                                        value={signUpData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Mobile Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    maxLength={11}
                                    minLength={11}
                                    placeholder='01234567890'
                                    type="tel"
                                    value={signUpData.mobile}
                                    onChange={handleChange}
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
                            value={signUpData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                minLength={8}
                                autoComplete="current-password"
                                value={signUpData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 text-gray-500 dark:text-gray-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className={`${isSignUp ? "block" : "hidden"}`}>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                minLength={8}
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:focus:border-[#e97730] focus:ring-[#e97730] focus:border-[#e97730] dark:bg-[#383838] dark:border-gray-600 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 text-gray-500 dark:text-gray-400"
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div>
                        <Button1
                            type={"submit"}
                            text={isSignUp ? 'Sign up' : 'Sign in'}
                            size={"full"}
                        />
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