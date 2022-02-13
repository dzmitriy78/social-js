import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f9b35462-4ca0-4325-b47c-45fa527c54b4"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postUsers(id) {
        return instance.post(`follow/${id}`, {},).then(response => response.data)
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`, {},)
            .then(response => response.data)
    }
}

export const myAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}