import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://librariacrud-i6c8.onrender.com",
    withCredentials: true
  })

export default axiosInstance
