import { useQuery } from "@tanstack/react-query"
import { GetAllProducts } from "../api/ProductApi"
import { createStore } from 'redux'
import { useProducts } from "./ProductMutations"

const { data } = useProducts()
console.log(data)
const initialState = { products: data }

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        default: return state
    }

}

// Store

const store = createStore(productReducer)
console.log(store)
