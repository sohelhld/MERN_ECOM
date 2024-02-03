import axios from "axios";
import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCESS } from "./actionTypes"

export const getAllProducts = ()=>(dispatch)=>{
dispatch({type : GET_ALL_PRODUCT_REQUEST});

return axios.get(`${process.env.REACT_APP_API_LOCALHOST}/product/`).then((res)=>{
    console.log(res.data)
    dispatch({type : GET_ALL_PRODUCT_SUCESS, payload : res.data})
}).catch((err)=>{
    console.error(err);
    dispatch({type : GET_ALL_PRODUCT_FAIL});
})
}