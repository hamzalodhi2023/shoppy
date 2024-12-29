import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "./CategoryApi";

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: GetAllCategories,
    });
};
