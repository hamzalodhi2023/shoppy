import { createStore } from 'redux'

const initialState = { products: [] }
const SET_PRODUCTS = "SET_PRODUCTS"

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        default: return state
    }

}

// Store

const store = createStore(productReducer)

export default store