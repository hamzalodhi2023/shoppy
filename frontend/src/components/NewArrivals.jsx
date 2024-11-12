import Cards from "./layout/ui/Cards"

function NewArrivals() {
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <h2 className="mb-8 text-[#383838] text-3xl font-bold text-center md:text-4xl dark:text-white">NEW ARRIVALS</h2>
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

export default NewArrivals