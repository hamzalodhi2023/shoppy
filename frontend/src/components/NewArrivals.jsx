import { useDispatch, useSelector } from "react-redux";
import Cards from "./layout/ui/Cards"
import Title from "./layout/ui/Title"
import { useEffect } from "react";

function NewArrivals() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "NEW_ARRIVALS" });
    }, [dispatch]);
    const newArrivals = useSelector((state) => state.newArrivals);
    console.log(newArrivals)
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
