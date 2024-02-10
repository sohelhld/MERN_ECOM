import axios from "axios";
import {
    ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS, ADMIN_SIGNUP_FAILURE,
    ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCCESS,
    LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS,
    SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCESS,
    USER_FORGET_PASS_FIND_ACCOUNT_BY_EMAIL_REQUEST,
    USER_FORGET_PASS_FIND_ACCOUNT_BY_EMAIL_SUCCESS,
    USER_FORGET_PASS_FIND_ACCOUNT_BY_EMAIL_FAIL,
    USER_CONFIRM_PASS_FIND_ACCOUNT_BY_EMAIL_REQUEST,
    USER_CONFIRM_PASS_FIND_ACCOUNT_BY_EMAIL_SUCCESS,
    USER_CONFIRM_PASS_FIND_ACCOUNT_BY_EMAIL_FAIL
} from "./actionsTypes"
const api = process.env.REACT_APP_API_LOCALHOST;
export const UserLogin = (data, toast) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post(`${api}/users/login`, data).then((res) => {
        console.log(res.data.token);
        dispatch({ type: LOGIN_SUCESS, payload: res.data.token })
        toast({
            title: 'Login Sucessfull',
            description: res.data.message || "Login sucessfull",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL });
        toast({
            title: "Somethings Went to Wrong",
            description: err.message || err,
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    })
};


export const userRegister = (data, toast) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    axios.post(`${api}/users/register`, data).then((res) => {
        console.log(res.data);
        dispatch({ type: SIGNUP_SUCESS, payload: res.data.token });
        toast({
            title: 'Register Sucessfull',
            description: res.data.message || "Register sucessfull",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }).catch((err) => {
        dispatch({ type: SIGNUP_FAIL });
        toast({
            title: "Somethings Went to Wrong",
            description: err.message || err,
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    })
}

export const adminLogin = (data, toast) => (dispatch) => {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    axios.post(`${api}/users/login`, data).then((res) => {
        console.log(res);
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data.token })
        toast({
            title: 'Login Sucessfull',
            description: res.data.message || "Login sucessfull",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: ADMIN_LOGIN_FAILURE });
        toast({
            title: "Somethings Went to Wrong",
            description: err.message || err,
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    })
}


export const adminRegister = (data, toast) => (dispatch) => {
    dispatch({ type: ADMIN_SIGNUP_REQUEST });
    axios.post(`${api}/users/register`, data).then((res) => {
        console.log(res.data);
        dispatch({ type: ADMIN_SIGNUP_SUCCESS, payload: res.data.token });
        toast({
            title: 'Register Sucessfull',
            description: res.data.message || "Register sucessfull",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }).catch((err) => {
        dispatch({ type: ADMIN_SIGNUP_FAILURE });
        toast({
            title: "Somethings Went to Wrong",
            description: err.message || err,
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    })
}

export const forgetpassFindAccoutn = (email, toast) => (dispatch) => {
    dispatch({ type: USER_FORGET_PASS_FIND_ACCOUNT_BY_EMAIL_REQUEST });
    return axios.post(`${api}/users/password/forgot`, email).then((res) => {
        console.log(res.data);
        dispatch({ type: USER_FORGET_PASS_FIND_ACCOUNT_BY_EMAIL_SUCCESS });
        toast({
            title: res.data.message,
            description: "Please Check Your Email",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
        })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: USER_FORGET_PASS_FIND_ACCOUNT_BY_EMAIL_FAIL });
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

export const confirmpassFindAccoutn = (password, confirmPassword, otp, toast) => (dispatch) => {
    dispatch({ type: USER_CONFIRM_PASS_FIND_ACCOUNT_BY_EMAIL_REQUEST });
    return axios.post(`${api}/users/password/reset/${otp}`, { password, confirmPassword }).then((res) => {
        console.log(res.data);
        dispatch({ type: USER_CONFIRM_PASS_FIND_ACCOUNT_BY_EMAIL_SUCCESS });
        toast({
            title: res.data.message,
            description: "Login with new password",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',

        })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: USER_CONFIRM_PASS_FIND_ACCOUNT_BY_EMAIL_FAIL });
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