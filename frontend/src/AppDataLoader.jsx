import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useProducts } from "./api/ProductMutations";

function AppDataLoader() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useProducts();

    useEffect(() => {
        if (data) {
            dispatch({ type: "SET_PRODUCTS", payload: data });
        }
        dispatch({ type: "SET_LOADING", payload: isLoading });
        dispatch({ type: "SET_ERROR", payload: error });
    }, [data, isLoading, error, dispatch]);

    return null; // This component doesn't render anything
}

export default AppDataLoader;
