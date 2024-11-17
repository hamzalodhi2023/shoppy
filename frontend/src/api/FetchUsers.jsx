import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateUser } from "./UsersApi";

const queryClient = useQueryClient();
export const CreateUserMutation = useMutation({
    mutationFn: (user) => CreateUser(user),
    onSuccess: (data) => {
        queryClient.invalidateQueries(["user"]);
        console.log(data)
    }
});

export const createUserMutate = (user) => {
    CreateUserMutation.mutate(user)
}