import { useEffect } from "react";
import { useProducts } from "../api/ProductMutations"
import Cards from "../components/layout/ui/Cards"
import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";

function Shop() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.filterProducts);
    const isLoading = useSelector((state) => state.isLoading);
    const isError = useSelector((state) => state.isError);
    //` Is Loading 
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#383838]">
                <div className="text-center">
                    <ScaleLoader
                        color="#e97730"
                        loading={isLoading}
                        // cssOverride={override}
                        width={10}
                        height={100}

                    />
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-[#e97730]">Loading...</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Please wait while we fetch the products</p>
                </div>
            </div>
        );
    }
    //` Is Error
    if (isError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#383838] px-4">
                <div className="text-center max-w-lg w-full bg-white dark:bg-[#2d2d2d] p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <svg className="mx-auto h-16 w-16 text-[#e97730]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-[#e97730] mb-4">
                        Oops! Something went wrong
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                        {isError.message || "We encountered an error while fetching the products. Please try again later."}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#e97730] hover:bg-[#d16628] text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );

    }
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#383838]">
            <div className="container px-4 py-8 mx-auto">
                <div className="flex flex-col gap-6 lg:flex-row">
                    {/* Filter Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white dark:bg-[#383838] p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-[#e97730]">Filters</h2>
                            <div className="space-y-4">
                                {/* Search Bar */}
                                <div>
                                    <h3 className="mb-2 font-medium text-gray-700 dark:text-gray-200">Search Products</h3>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#e97730] dark:bg-[#2d2d2d] dark:text-gray-200"
                                        onChange={(e) => {
                                            dispatch({ type: "SEARCH", payload: e.target.value });
                                        }}
                                    />
                                </div>
                                {/* Category Filter */}
                                <div>
                                    <h3 className="mb-2 font-medium text-gray-700 dark:text-gray-200">Category</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                            <input onChange={(e) => {
                                                console.log(e.target.value)
                                            }} type="checkbox" className="checkbox border-orange-400 [--chkbg:#e97730] [--chkfg:white] checked:border[#e97730]" />
                                            <span>Electronics</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                            <input type="checkbox" className="checkbox border-orange-400 [--chkbg:#e97730] [--chkfg:white] checked:border[#e97730]" />
                                            <span>Clothing</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                            <input type="checkbox" className="checkbox border-orange-400 [--chkbg:#e97730] [--chkfg:white] checked:border[#e97730]" />
                                            <span>Accessories</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Price Range Filter */}
                                <div>
                                    <h3 className="mb-2 font-medium text-gray-700 dark:text-gray-200">Price Range</h3>
                                    <input type="range" className="w-full accent-[#e97730]" min="0" max="1000" />
                                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                                        <span>$0</span>
                                        <span>$1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:w-3/4">
                        <div className="flex flex-wrap items-center gap-6 justify-evenly">
                            {/* Product Card */}
                            {products.map(({ _id, name, price, description, photos }) => {
                                return <Cards key={_id} _id={_id} name={name} price={price} description={description} photos={photos} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop