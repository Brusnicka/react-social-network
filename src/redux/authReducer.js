import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "react-social-network/auth/SET-AUTH-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "react-social-network/auth/GET-CAPTCHA-URL-SUCCESS"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,

            }
        }

        default:
            return state;
    }
};



export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) =>( {
    type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaUrl}
})

export const getAuth = () => async (dispatch) => {
    const response = await authAPI.getAuth();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getCaptchaUrl =() => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {
   try{
       const response = await authAPI.logIn(email, password, rememberMe, captcha);
       if (response.data.resultCode === 0) {
           dispatch(getAuth())
       } else {
           if (response.data.resultCode === 10){
               dispatch(getCaptchaUrl());
           }
           let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
           dispatch(stopSubmit('login', {_error: message}))
       }} catch (error){
            debugger;
   }
}


export const logOut = () => async (dispatch) => {
    const response = await authAPI.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
