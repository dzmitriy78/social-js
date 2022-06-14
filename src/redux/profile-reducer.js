import {profileAPI, usersAPI} from "../api/api";

const addPost = "ADD-POST";
export const addPostActionCreator = (text) => ({type: addPost, newText: text});
export const setUserProfile = (profile) => ({type: "SET_USER_PROFILE", profile})
export const setStatus = (status) => ({type: "SET_STATUS", status})
export const deletePost =(id) => ({type: "DELETE-POST", id});

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "It's my first post", likeCount: 25},
        {id: 3, message: "Hi", likeCount: 1},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 7,
                message: action.newText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state, status: action.status
            }
        case "DELETE-POST":
            return  {...state,
            postData: state.postData.filter(p => p.id !== action.id ? p : "")
        }
        default:
            return state;
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(({data}) => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(({data}) => {
                dispatch(setStatus(data));
            });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;