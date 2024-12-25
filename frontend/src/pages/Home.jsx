import FeaturedProducts from "../components/FeaturedProducts"
import LatestBlog from "../components/LatestBlog"
import NewArrivals from "../components/NewArrivals"
import Services from "../components/Services"
import Slider from "../components/Slider"
import Slogan from "../components/Slogan"
import Subscribe from "../components/Subscribe"
function Home() {

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