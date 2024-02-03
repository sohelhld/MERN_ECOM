import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCESS } from "./actionTypes"

const initialState = {
    allProducts: [],
    getAllProductsIsLoading: false,
    getAllProductsIsError: false
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCT_REQUEST:
            return { ...state, getAllProductsIsLoading: true };
        case GET_ALL_PRODUCT_SUCESS:
            return { ...state, getAllProductsIsLoading: false, allProducts: payload };
        case GET_ALL_PRODUCT_FAIL:
            return { ...state, getAllProductsIsLoading: false, getAllProductsIsError: true }

        default:
            return { ...state }
    }
}