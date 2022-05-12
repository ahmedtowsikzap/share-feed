import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://share-feed-12.herokuapp.com/api/"
})