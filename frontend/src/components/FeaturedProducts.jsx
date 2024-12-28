import { useSelector } from "react-redux";
import Cards from "./layout/ui/Cards"
import Title from "./layout/ui/Title"

function FeaturedProducts() {
    const data = useSelector((state) => state.filterProducts);
    const products = data.slice(5, 8);
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <Title text1={"FEATURED"} text2={"PRODUCTS"} />
                <div className="flex flex-wrap justify-evenly">
                    {/* cards Start */}
                    {products.map(({ _id, name, price, description, photos }) => {
                        return <Cards key={_id} _id={_id} name={name} price={price} description={description} photos={photos} />
                    })}
                    {/* cards End */}
                </div>
            </div>
        </div >
    )
}

export default FeaturedProducts