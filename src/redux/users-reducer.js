const follow = "FOLLOW";
const unFollow = "UNFOLLOW";
const setUsers = "SET_USERS"
export const followAC = (userID) => ({type: follow, userID});
export const unFollowAC = (userID) => ({type: unFollow, userID});
export const setUsersAC = (users) => ({type: setUsers, users});

let initialState = {
    users: []
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export default usersReducer;