import { createStore } from 'redux';

const initialState = {
    products: [],
    filterProducts: [],
    isLoading: true,
    isError: null
};

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload, filterProducts: action.payload, isLoading: false };
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_ERROR:
            return { ...state, isError: action.payload };
        default:
            return state;
    }
};

// Store
const store = createStore(productReducer);

export default store;
