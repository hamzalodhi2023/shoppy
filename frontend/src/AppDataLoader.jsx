import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useProducts } from "./api/ProductMutations";
import { useCategories } from "./api/CategoryMutations";

function AppDataLoader() {
    const dispatch = useDispatch();
    const { data: products, isLoading, error } = useProducts();
    const { data: categories, isLoading: isCategoriesLoading, error: categoriesError } = useCategories();
    useEffect(() => {
        if (products) {
            dispatch({ type: "SET_PRODUCTS", payload: products });
        }
        dispatch({ type: "SET_LOADING", payload: isLoading || isCategoriesLoading });
        dispatch({ type: "SET_ERROR", payload: error || categoriesError });

        if (categories) {
            dispatch({ type: "SET_CATEGORIES", payload: categories });
        }
    }, [products, isLoading, error, categories, isCategoriesLoading, categoriesError, dispatch]);

    return null; // This component doesn't render anything
}

export default AppDataLoader;
