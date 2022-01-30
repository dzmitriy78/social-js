const follow = "FOLLOW";
const unFollow = "UNFOLLOW";
const setUsers = "SET_USERS";
const setCurrentPage = "SET_CURRENT_PAGE";
const setUsersTotalCount = "SET_USERS_TOTAL_COUNT";
const toggleIsFetching = "TOGGLE_IS_FETCHING";
export const followAC = (userID) => ({type: follow, userID});
export const unFollowAC = (userID) => ({type: unFollow, userID});
export const setUsersAC = (users) => ({type: setUsers, users});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: setUsersTotalCount, totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: toggleIsFetching, isFetching});

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