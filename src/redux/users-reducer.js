export const follow = (userID) => ({type: "FOLLOW", userID});
export const unFollow = (userID) => ({type: "UNFOLLOW", userID});
export const setUsers = (users) => ({type: "SET_USERS", users});
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: "SET_USERS_TOTAL_COUNT", totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: "TOGGLE_IS_FETCHING", isFetching});

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        default:
            return state;
    }
}
export default usersReducer;