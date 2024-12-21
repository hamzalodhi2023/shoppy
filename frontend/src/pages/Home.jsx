import { useQuery } from "@tanstack/react-query"
import { GetAllProducts } from "../api/ProductApi"
import FeaturedProducts from "../components/FeaturedProducts"
import LatestBlog from "../components/LatestBlog"
import NewArrivals from "../components/NewArrivals"
import Services from "../components/Services"
import Slider from "../components/Slider"
import Slogan from "../components/Slogan"
import Subscribe from "../components/Subscribe"
import { useProducts } from "../api/ProductMutations"
function Home() {
    const { data } = useProducts()
    console.log(data)

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