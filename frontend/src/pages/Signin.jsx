import React, { useState } from "react";
import Title from "../components/layout/ui/Title";
import { useCreateUserMutation, useLoginUserMutation } from "../api/FetchUsers";
import { Button1 } from "../components/layout/ui/Button";

function Signin() {
  //` Sign Up Form Data
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  });
  // ` Reset Sign Up Form Data callBack Function
  const resetSignUpData = () => {
    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
      confirmPassword: "",
    });
    setIsSignUp(false);
  };
  //` Sign Up Form Mutation
  const { mutate: createUser } = useCreateUserMutation(resetSignUpData);

  // ` Sign In Form Mutation
  const { mutate: signIn } = useLoginUserMutation();

  //` Handle Change Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  //` Handle Sign Up function
  const handleSubmitSignup = (e) => {
    e.preventDefault();
    createUser(signUpData);
  };

  //` Handle Sign In function
  const handleSubmitSignin = (e) => {
    e.preventDefault();
    signIn({
      email: signUpData.email,
      password: signUpData.password,
    });
  };

  //` For sign in and sign up
  const [isSignUp, setIsSignUp] = useState(false);
  //` For password show and hide
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordsMatch = signUpData.password === signUpData.confirmPassword;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10 dark:bg-[#383838] sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-[#2a2a2a]">
        <div>
          {isSignUp ? (
            <Title text1={"CREATE"} text2={"ACCOUNT"} />
          ) : (
            <Title text1={"SIGN IN"} text2={"TO YOUR ACCOUNT"} />
          )}
        </div>
        <form
          autoComplete="off"
          onSubmit={isSignUp ? handleSubmitSignup : handleSubmitSignin}
          className="space-y-6"
        >
          {isSignUp && (
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={signUpData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#383838] shadow-sm focus:border-[#e97730] focus:outline-none focus:ring-[#e97730] dark:border-gray-600 dark:bg-[#383838] dark:text-gray-300 dark:focus:border-[#e97730]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={signUpData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#383838] shadow-sm focus:border-[#e97730] focus:outline-none focus:ring-[#e97730] dark:border-gray-600 dark:bg-[#383838] dark:text-gray-300 dark:focus:border-[#e97730]"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  maxLength={11}
                  minLength={11}
                  placeholder="01234567890"
                  type="tel"
                  value={signUpData.mobile}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#383838] shadow-sm focus:border-[#e97730] focus:outline-none focus:ring-[#e97730] dark:border-gray-600 dark:bg-[#383838] dark:text-gray-300 dark:focus:border-[#e97730]"
                />
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={signUpData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#383838] shadow-sm focus:border-[#e97730] focus:outline-none focus:ring-[#e97730] dark:border-gray-600 dark:bg-[#383838] dark:text-gray-300 dark:focus:border-[#e97730]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                minLength={8}
                value={signUpData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#383838] shadow-sm focus:border-[#e97730] focus:outline-none focus:ring-[#e97730] dark:border-gray-600 dark:bg-[#383838] dark:text-gray-300 dark:focus:border-[#e97730]"
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
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                minLength={8}
                value={signUpData.confirmPassword}
                onChange={handleChange}
                required={isSignUp}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[#383838] shadow-sm focus:border-[#e97730] focus:outline-none focus:ring-[#e97730] dark:border-gray-600 dark:bg-[#383838] dark:text-gray-300 dark:focus:border-[#e97730]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 text-gray-500 dark:text-gray-400"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {!passwordsMatch && (
              <p className="text-sm text-red-500">Incorrect password</p>
            )}
          </div>
          <div>
            <Button1
              type={"submit"}
              text={isSignUp ? "Sign up" : "Sign in"}
              size={"full"}
              disabled={!passwordsMatch}
            />
          </div>
        </form>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="border-b-[1px] w-fit text-center border-b-white font-medium text-[#e97730] hover:border-b-[#e97730] hover:text-[#d66a2b] dark:border-b-[#2a2a2a] dark:hover:border-b-[#e97730]"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => {
                window.open(
                  "http://localhost:8080/users/social-login/auth/google/callback",
                  "_self",
                );
              }}
              className="group relative flex w-full justify-center rounded-md border-[1px] bg-white px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#e97730] focus:ring-offset-2 dark:bg-transparent dark:text-white"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </span>
              Continue with Google
            </button>
            <button
              onClick={() => {
                // Add Facebook login logic here
              }}
              className="group dark:text-white relative flex w-full justify-center rounded-md border-[1px] px-4 py-2 text-sm font-medium text-gray-600  focus:outline-none focus:ring-2 focus:ring-[#1877f2] focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#0079ff"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </span>
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;