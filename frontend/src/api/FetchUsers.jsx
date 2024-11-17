import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "./UsersApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const useCreateUserMutation = (onSuccessCallback) =>
    useMutation({
        mutationFn: (signUpData) => CreateUser(signUpData),
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.message);
            onSuccessCallback();
        },
        onError: (error) => {
            console.log(error.response.data.message)
            toast.error(error.response.data.message);
        },
    });
