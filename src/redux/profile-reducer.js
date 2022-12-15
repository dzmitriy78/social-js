import {profileAPI, usersAPI} from "../api/api"
import {v1} from 'uuid';

const ADD_POST = "profileReducer/ADD-POST"
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE"
const SET_STATUS = "profileReducer/SET_STATUS"
const DELETE_POST = "profileReducer/DELETE-POST"
const SET_PHOTO = "profileReducer/SET-PHOTO"
const SET_ERROR = "profileReducer/SET-ERROR"
const SET_EDIT_MODE = "profileReducer/SET-EDIT-MODE"

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id});
export const setPhoto = (photos) => ({type: SET_PHOTO, photos})
export const setError = (error) => ({type: SET_ERROR, error})
export const setEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode})


let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "It's my first post", likeCount: 25},
        {id: 3, message: "Hi", likeCount: 1},
    ],
    profile: null,
    status: "",
    error: "",
    editMode: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: action.newText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.id ? p : "")
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: action.editMode
            }
        default:
            return state
    }
}

export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(({data}) => {
                dispatch(setStatus(data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export const savePhoto = (file) => {
    return (dispatch) => {
        profileAPI.updatePhoto(file)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(setPhoto(data.data.photos))
                }
            })
    }
}
export const saveProfile = (profile) => {
    return (dispatch, getState) => {
        const userID = getState().auth.userId
        profileAPI.updateProfile(profile)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(getProfile(userID))
                    dispatch(setEditMode(false))
                } else {
                    dispatch(setError(data.messages[0]))
                }
            })
    }
}


export default profileReducer;