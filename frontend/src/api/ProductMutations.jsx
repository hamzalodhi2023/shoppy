import { useQuery } from "@tanstack/react-query";
import { GetAllProducts } from "./ProductApi";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: GetAllProducts,
    });
};
