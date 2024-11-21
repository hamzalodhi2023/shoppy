import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "./UsersApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ` Create User Mutation
export const useCreateUserMutation = (onSuccessCallback) =>
    useMutation({
        mutationFn: (signUpData) => CreateUser(signUpData),
        onSuccess: (data) => {
            if (localStorage.getItem("darkMode") === "true") {
                toast.success(data.message, {
                    theme: "dark",
                });
            } else {
                toast.success(data.message, {
                    theme: "light",
                });

            }
            onSuccessCallback();

        },
        onError: (error) => {
            if (localStorage.getItem("darkMode") === "true") {
                toast.error(error.response.data.message, {
                    theme: "dark",
                });
            } else {
                toast.error(error.response.data.message, {
                    theme: "light",
                });

            }
        },
    });

// ` Login User Mutation
export const useLoginUserMutation = (onSuccessCallback) =>
    useMutation({
        mutationFn: (signUpData) => CreateUser(signUpData),
        onSuccess: (data) => {
            if (localStorage.getItem("darkMode") === "true") {
                toast.success(data.message, {
                    theme: "dark",
                });
            } else {
                toast.success(data.message, {
                    theme: "light",
                });

            }
            onSuccessCallback();
        },
        onError: (error) => {
            if (localStorage.getItem("darkMode") === "true") {
                toast.error(error.response.data.message, {
                    theme: "dark",
                });
            } else {
                toast.error(error.response.data.message, {
                    theme: "light",
                });

            }
        },
    });
