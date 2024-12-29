import { createStore } from 'redux';

const initialState = {
    products: [],
    categories: [],
    filterProducts: [],
    isLoading: true,
    isError: null
};

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";
const SEARCH = "SEARCH";
const SET_CATEGORIES = "SET_CATEGORIES";
const CATEGORY_FILTER = "CATEGORY_FILTER";

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload, filterProducts: action.payload, isLoading: false };
        case SET_CATEGORIES:
            return { ...state, categories: action.payload }
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_ERROR:
            return { ...state, isError: action.payload };
        case SEARCH:
            const searchTerm = action.payload.toLowerCase();
            const filterProducts = state.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) // Adjust based on the structure of your product objects
            );
            return { ...state, filterProducts };
        case CATEGORY_FILTER:
            const selectedCategory = action.payload.toLowerCase();
            const CategoryFilterProducts = selectedCategory ? state.products.filter(product => product.category.toLowerCase().includes(selectedCategory)) : state.products;
            return { ...state, filterProducts: CategoryFilterProducts };
        default:
            return state;
    }
};

// Store
const store = createStore(productReducer);

export default store;
