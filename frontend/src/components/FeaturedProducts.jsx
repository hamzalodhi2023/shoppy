import Cards from "./layout/ui/Cards"
import Title from "./layout/ui/Title"

function FeaturedProducts() {
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <Title text1={"FEATURED"} text2={"PRODUCTS"} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* cards Start */}
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    {/* cards End */}
                </div>
            </div>
        </div >
    )
}

export default FeaturedProducts