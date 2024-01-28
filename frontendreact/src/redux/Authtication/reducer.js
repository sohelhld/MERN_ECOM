import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCESS } from "./actionsTypes"

const initialState = {
    isAuth: false,
    token: "",
    isLoginLoading: false,
    isLoginError: false,
    isSignupLoading: false,
    isSignupgError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoginLoading: true };
        case LOGIN_SUCESS:
            return { ...state, isLoginLoading: false, isAuth: true, token: payload };
        case LOGIN_FAIL:
            return { ...state, isLoginLoading: false, isLoginError: true };
        case SIGNUP_REQUEST:
            return { ...state, isSignupLoading: true };
        case SIGNUP_SUCESS:
            return { ...state, isSignupLoading: false, token: payload };
        case SIGNUP_FAIL:
            return { ...state, isSignupLoading: false, isSignupgError: true }
        default:
            return { ...state }
    }
}