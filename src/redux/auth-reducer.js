import {myAPI} from "../api/api";

const SET_AUTH_USER_DATA = "authReducer/SET_USER_DATA"

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
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
export const login = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        let data = await myAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authMe())
        } else {
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
export default authReducer;