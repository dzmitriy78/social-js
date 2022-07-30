import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {},)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`, {},)
            .then(response => response.data)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status) {
        return instance.put("profile/status/", {status: status})
    },
    updatePhoto(photo) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put("profile/photo/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile) {
        return instance.put("profile/", profile)
    }
}

export const myAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}