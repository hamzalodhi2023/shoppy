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
        <div className="text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="border-b-[1px] border-b-white font-medium text-[#e97730] hover:border-b-[#e97730] hover:text-[#d66a2b] dark:border-b-[#2a2a2a] dark:hover:border-b-[#e97730]"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
          <button
            onClick={() => {
              window.open(
                "http://localhost:8080/users/social-login/auth/google/callback",
                "_self",
              );
            }}
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
