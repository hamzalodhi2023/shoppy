import { useDispatch } from "react-redux"
import { useProducts } from "../api/ProductMutations"
import FeaturedProducts from "../components/FeaturedProducts"
import LatestBlog from "../components/LatestBlog"
import NewArrivals from "../components/NewArrivals"
import Services from "../components/Services"
import Slider from "../components/Slider"
import Slogan from "../components/Slogan"
import Subscribe from "../components/Subscribe"
import { useEffect } from "react"


function Home() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useProducts();

    useEffect(() => {
        if (data) {
            dispatch({ type: "SET_PRODUCTS", payload: data });
            dispatch({ type: "SET_LOADING", payload: isLoading });
            dispatch({ type: "SET_ERROR", payload: error });
        }
    }, [data, dispatch]);

    return (
        <>
            <Slider />
            <Services />
            <NewArrivals />
            <Slogan />
            <FeaturedProducts />
            <LatestBlog />
            <Subscribe />
        </>
    )
}

export default Home