import axios from "axios";
import {
    ADDTOCART_PRODUCT_REQUEST, GET_ALL_PRODUCT_FAIL,
    GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCESS,
    GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCESS, ADDTOCART_PRODUCT_SUCESS,
    ADDTOCART_PRODUCT_FAIL,
    GETFROMCART_PRODUCT_REQUEST,
    GETFROMCART_PRODUCT_SUCESS,
    GETFROMCART_PRODUCT_FAIL,
    UPDATEFROMCART_PRODUCT_REQUEST,
    UPDATEFROMCART_PRODUCT_SUCESS,
    UPDATEFROMCART_PRODUCT_FAIL,
    DELETEFROMCART_PRODUCT_REQUEST,
    DELETEFROMCART_PRODUCT_SUCESS,
    DELETEFROMCART_PRODUCT_FAIL
} from "./actionTypes"
const api = process.env.REACT_APP_API_LOCALHOST;
export const getAllProducts = () => (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCT_REQUEST });

    return axios.get(`${api}/product/`).then((res) => {
        console.log(res.data)
        dispatch({ type: GET_ALL_PRODUCT_SUCESS, payload: res.data })
    }).catch((err) => {
        console.error(err);
        dispatch({ type: GET_ALL_PRODUCT_FAIL });
    })
}


export const getSingleProduct = (id) => (dispatch) => {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
    return axios.get(`${api}/product/${id}`).then((res) => {
        console.log(res.data);

        dispatch({ type: GET_SINGLE_PRODUCT_SUCESS, payload: res.data.product });

    }).catch((res) => {
        dispatch({ type: GET_SINGLE_PRODUCT_FAIL });
    })
}


export const productAddToCart = (data, toast, token) => async (dispatch) => {
    console.log(token);
    dispatch({ type: ADDTOCART_PRODUCT_REQUEST });
    return axios.post(`${api}/cart/`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": `application/json`
        }
    }).then((res) => {
        console.log(res.data);
        dispatch({ type: ADDTOCART_PRODUCT_SUCESS });
        toast({
            title: res.data.message,
            description: "Product successfully added",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',

        })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: ADDTOCART_PRODUCT_FAIL });
        toast({
            title: err.message,
            description: "Something went to wrong",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
        })
    })
}


export const getProductFromCart = (token) => async (dispatch) => {
    dispatch({ type: GETFROMCART_PRODUCT_REQUEST });
    return axios.get(`${api}/cart/`, {
        headers: {
            "Authorization": "Bearer " + token,
            "Accept": "application/json"
        }
    }).then((res) => {
        console.log(res.data.product);
        dispatch({ type: GETFROMCART_PRODUCT_SUCESS, payload: res.data.product });
    }).catch((err) => {
        dispatch({ type: GETFROMCART_PRODUCT_FAIL });
        console.log(err);
    })
}

export const updateCartProduct = (id, data, token) => (dispatch) => {
    dispatch({ type: UPDATEFROMCART_PRODUCT_REQUEST });
    return axios.post(`${api}/cart/${id}`, data, {
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    }).then((res) => {
        console.log(res.data);
        dispatch({ type: UPDATEFROMCART_PRODUCT_SUCESS });
    }).catch((err) => {
        dispatch({ type: UPDATEFROMCART_PRODUCT_FAIL });
    })
}


export const deleteProductfromCart = (id, token) => (dispatch) => {
    dispatch({ type: DELETEFROMCART_PRODUCT_REQUEST });
    return axios.delete(`${api}/cart/${id}`, {
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    }).then((res) => {
        dispatch({ type: DELETEFROMCART_PRODUCT_SUCESS });
    }).catch((err) => {
        dispatch({ type: DELETEFROMCART_PRODUCT_FAIL });
    })
}