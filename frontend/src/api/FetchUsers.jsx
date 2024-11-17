import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "./UsersApi";

export const useCreateUserMutation = () =>
    useMutation({
        mutationFn: (signUpData) => CreateUser(signUpData),
        onSuccess: (data) => {
            console.log("User created successfully:", data);
        },
        onError: (error) => {
            console.error("Error creating user:", error);
        },
    });
