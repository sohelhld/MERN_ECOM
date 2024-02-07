import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCESS, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCESS } from "./actionTypes"

const initialState = {
    allProducts: [],
    getAllProductsIsLoading: false,
    getAllProductsIsError: false,
    getSingleProductsIsLoading: false,
    getSingleProductsIsError: false,
    singleProduct  : null
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCT_REQUEST:
            return { ...state, getAllProductsIsLoading: true };
        case GET_ALL_PRODUCT_SUCESS:
            return { ...state, getAllProductsIsLoading: false, allProducts: payload };
        case GET_ALL_PRODUCT_FAIL:
            return { ...state, getAllProductsIsLoading: false, getAllProductsIsError: true }
        case GET_SINGLE_PRODUCT_REQUEST:
            return { ...state, getSingleProductsIsLoading: true };
        case GET_SINGLE_PRODUCT_SUCESS:
            return { ...state, getSingleProductsIsLoading: false, singleProduct: payload };
        case GET_SINGLE_PRODUCT_FAIL:
            return { ...state, getSingleProductsIsLoading: false, getSingleProductsIsError: true }

        default:
            return { ...state }
    }
}