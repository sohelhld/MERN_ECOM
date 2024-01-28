import axios from "axios";
import { LOGIN_REQUEST } from "./actionsTypes"

export const UserLogin = ()=>(dispatch)=>{
    dispatch({type : LOGIN_REQUEST});
    axios.post(``)
}