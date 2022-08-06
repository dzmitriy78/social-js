import {myAPI, securityAPI} from "../api/api";

const SET_AUTH_USER_DATA = "authReducer/SET_USER_DATA"
const SET_CAPTCHA_URL = "authReducer/SET-CAPTCHA-URL"

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
})

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const authMe = () => async (dispatch) => {
    let data = await myAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha, setStatus) => {
    return async (dispatch) => {
        let data = await myAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(authMe())
        } else {
           if (data.resultCode === 10){
                dispatch(getCaptcha())
            }
            setStatus(data.messages)
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await myAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(
                null, null, null, false
            ))
        }
    }
}
export const getCaptcha = () => {
    return async (dispatch) => {
        let data = await securityAPI.captcha()
        let captchaUrl = data.url
        dispatch(setCaptchaUrl(captchaUrl))
    }
}
export default authReducer;