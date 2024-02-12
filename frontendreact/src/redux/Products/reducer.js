import {
    ADDTOCART_PRODUCT_FAIL, ADDTOCART_PRODUCT_REQUEST,
    ADDTOCART_PRODUCT_SUCESS, GETFROMCART_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_SUCESS, GET_SINGLE_PRODUCT_FAIL,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCESS, GETFROMCART_PRODUCT_SUCESS, GETFROMCART_PRODUCT_FAIL, UPDATEFROMCART_PRODUCT_REQUEST, UPDATEFROMCART_PRODUCT_SUCESS, UPDATEFROMCART_PRODUCT_FAIL, DELETEFROMCART_PRODUCT_REQUEST, DELETEFROMCART_PRODUCT_SUCESS, DELETEFROMCART_PRODUCT_FAIL
} from "./actionTypes"

const initialState = {
    allProducts: [],
    getAllProductsIsLoading: false,
    getAllProductsIsError: false,
    getSingleProductsIsLoading: false,
    getSingleProductsIsError: false,
    singleProduct: null,
    addtoCartProductIsLoading: false,
    addtoCartProductIsError: false,
    getfromCartProductIsLoading: false,
    getfromCartProductIsError: false,
    getfromCartProductData: null,
    updatefromCartProductIsLoading: false,
    updatefromCartProductIsError: false,
    deletefromCartProductIsLoading: false,
    deletefromCartProductIsError: false,


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
        case ADDTOCART_PRODUCT_REQUEST:
            return { ...state, addtoCartProductIsLoading: true };
        case ADDTOCART_PRODUCT_SUCESS:
            return { ...state, addtoCartProductIsLoading: false };
        case ADDTOCART_PRODUCT_FAIL:
            return { ...state, addtoCartProductIsLoading: false, addtoCartProductIsError: true };
        case GETFROMCART_PRODUCT_REQUEST:
            return { ...state, getfromCartProductIsLoading: true };
        case GETFROMCART_PRODUCT_SUCESS:
            return { ...state, getfromCartProductIsLoading: false, getfromCartProductData: payload };
        case GETFROMCART_PRODUCT_FAIL:
            return { ...state, getfromCartProductIsLoading: false, getfromCartProductIsError: true };
        case UPDATEFROMCART_PRODUCT_REQUEST:
            return { ...state, updatefromCartProductIsLoading: true };
        case UPDATEFROMCART_PRODUCT_SUCESS:
            return { ...state, updatefromCartProductIsLoading: false };
        case UPDATEFROMCART_PRODUCT_FAIL:
            return { ...state, updatefromCartProductIsLoading: false, updatefromCartProductIsError: true };
        case DELETEFROMCART_PRODUCT_REQUEST:
            return { ...state, deletefromCartProductIsLoading: true };
        case DELETEFROMCART_PRODUCT_SUCESS:
            return { ...state, deletefromCartProductIsLoading: true };
        case DELETEFROMCART_PRODUCT_FAIL:
            return { ...state, deletefromCartProductIsLoading: false, deletefromCartProductIsError: true }
        default:
            return { ...state }
    }
}