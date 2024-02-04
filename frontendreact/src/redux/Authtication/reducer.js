import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_SIGNUP_FAILURE, ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCESS } from "./actionsTypes"

const initialState = {
    isAuth: false,
    token: "",
    adminToken: "",
    isLoginLoading: false,
    isLoginError: false,
    isSignupLoading: false,
    isSignupgError: false,
    isAdminLoginLoading: false,
    isAdminLoginError: false,
    isAdminSignupLoading: false,
    isAdminSignupgError: false,

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
            return { ...state, isSignupLoading: false, isSignupgError: true };
        case ADMIN_LOGIN_REQUEST:
            return { ...state, isAdminLoginLoading: true };
        case ADMIN_LOGIN_SUCCESS:
            return { ...state, isAdminLoginLoading: false, adminToken: payload }
        case ADMIN_LOGIN_FAILURE:
            return { ...state, isAdminLoginLoading: false, isAdminLoginError: true }
        case ADMIN_SIGNUP_REQUEST:
            return { ...state, isAdminSignupLoading: true }
        case ADMIN_SIGNUP_SUCCESS:
            return { ...state, isAdminSignupLoading: false };
        case ADMIN_SIGNUP_FAILURE:
            return { ...state, isAdminSignupLoading: false, isAdminSignupgError: true };
        default:
            return { ...state }
    }
}