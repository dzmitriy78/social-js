import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "bccbb0fd-5265-4def-9538-a6ed1d0a6278"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postUsers(id) {
        return instance.post(`follow/${id}`, {},)
            .then(response => response.data)
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