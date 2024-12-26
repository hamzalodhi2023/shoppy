import { useEffect } from "react";
import { useProducts } from "../api/ProductMutations"
import Cards from "../components/layout/ui/Cards"
import { useDispatch, useSelector } from "react-redux";

function Shop() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useProducts();
    useEffect(() => {
        if (data) {
            dispatch({ type: "SET_PRODUCTS", payload: data });
        }
    }, [data, dispatch]);

    const products = useSelector((state) => state.products);
    console.log(products)
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#383838]">
            <div className="container px-4 py-8 mx-auto">
                <div className="flex flex-col gap-6 lg:flex-row">
                    {/* Filter Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white dark:bg-[#383838] p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-[#e97730]">Filters</h2>
                            <div className="space-y-4">
                                {/* Category Filter */}
                                <div>
                                    <h3 className="mb-2 font-medium text-gray-700 dark:text-gray-200">Category</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                            <input type="checkbox" className="checkbox border-orange-400 [--chkbg:#e97730] [--chkfg:white] checked:border[#e97730]" />
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
                        <div className="flex flex-wrap gap-6">
                            {/* Product Card */}
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            {/* {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="bg-white dark:bg-[#383838] rounded-lg shadow-md overflow-hidden">
                                    <div className="aspect-w-1 aspect-h-1">
                                        <img
                                            src={`https://via.placeholder.com/300`}
                                            alt="Product"
                                            className="object-cover w-full h-48"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-[#e97730]">Product Name</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-300">$99.99</p>
                                        <button className="mt-4 w-full bg-[#e97730] text-white py-2 px-4 rounded hover:bg-[#d16628] transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop