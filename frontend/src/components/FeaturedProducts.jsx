import Cards from "./layout/ui/Cards"
import Title from "./layout/ui/Title"

function FeaturedProducts() {
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <Title text1={"FEATURED"} text2={"PRODUCTS"} />
                <div className="flex flex-wrap gap-6 justify-evenly">
                    {/* cards Start */}

                    {/* cards End */}
                </div>
            </div>
        </div >
    )
}

export default FeaturedProducts