import Cards from "./layout/ui/Cards"
import Title from "./layout/ui/Title"

function NewArrivals() {
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <Title text1={"NEW"} text2={"ARRIVALS"} />
                <div className="flex flex-wrap gap-6 justify-evenly">
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

export default NewArrivals