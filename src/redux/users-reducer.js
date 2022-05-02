import {usersAPI} from "../api/api";

export const follow = (userID) => ({type: "FOLLOW", userID});
export const unFollow = (userID) => ({type: "UNFOLLOW", userID});
export const setUsers = (users) => ({type: "SET_USERS", users});
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: "SET_USERS_TOTAL_COUNT", totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: "TOGGLE_IS_FETCHING", isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
});

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: true} : u;
                })
            }
        }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_USERS_TOTAL_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            })
    }
}
export const following = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.followUser(userId)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(follow(userId))
                    }
                    dispatch(toggleFollowingInProgress(false, userId))
                }
            )
    }
}
export const unfollowing = (userId) => {
    return (dispatch) => {
        usersAPI.unfollowUser(userId)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unFollow(userId))
                    }
                }
            )
    }
}

export default usersReducer;