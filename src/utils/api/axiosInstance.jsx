import axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://libreria-production.up.railway.app",
  })

export default axiosInstance
