import axios from "axios"

const BASE_URL = "https://api.github.com/"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export { axiosInstance }
