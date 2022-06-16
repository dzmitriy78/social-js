import {authMe} from "./auth-reducer";

const SET_INITIALIZED = "appReducer/SET_INITIALIZED"
export const setInitialized = () => ({type: SET_INITIALIZED})

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}

export default appReducer;