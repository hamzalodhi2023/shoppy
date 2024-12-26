import { useSelector } from "react-redux";
import Title from "./layout/ui/Title"

function NewArrivals() {
    const products = useSelector((state) => state.products);
    console.log(products)
    return (
        <div className="w-full py-16 px-4 dark:bg-[#383838]">
            <div className="max-w-[1240px] mx-auto">
                <Title text1={"NEW"} text2={"ARRIVALS"} />
                <div className="flex flex-wrap gap-6 justify-evenly">
                    {/* cards Start */}

                    {/* cards End */}
                </div>
            </div>
        </div >
    )
}

export default NewArrivals;
