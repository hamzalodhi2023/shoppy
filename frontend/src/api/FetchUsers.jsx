import { useMutation } from "@tanstack/react-query";
import { CreateUser, Login } from "./UsersApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

// ` Create User Mutation
export const useCreateUserMutation = (onSuccessCallback) =>
    useMutation({
        mutationFn: (signUpData) => CreateUser(signUpData),
        onSuccess: (data) => {
            const darkMode = localStorage.getItem("darkMode") === "true";
            toast.success(data.message, {
                theme: darkMode ? "dark" : "light",
            });
            onSuccessCallback();
        },
        onError: (error) => {
            const darkMode = localStorage.getItem("darkMode") === "true";
            toast.error(error.response.data.message, {
                theme: darkMode ? "dark" : "light",
            });
        },
    });

// ` Login User Mutation
export const useLoginUserMutation = () => {
    const navigate = useNavigate(); // Use useNavigate correctly here
    return useMutation({
        mutationFn: (loginData) => Login(loginData),
        onSuccess: (data) => {
            const darkMode = localStorage.getItem("darkMode") === "true";
            toast.success(data.message, {
                theme: darkMode ? "dark" : "light",
            });
            navigate("/shop"); // Use navigate here
        },
        onError: (error) => {
            const darkMode = localStorage.getItem("darkMode") === "true";
            toast.error(error.response.data.message, {
                theme: darkMode ? "dark" : "light",
            });
        },
    });
};
