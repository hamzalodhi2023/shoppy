import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "./UsersApi";

export const CreateUserMutation = useMutation({
    mutationFn: (user) => CreateUser(user),
    onSuccess: (data) => {
        console.log(data)
    }
});
