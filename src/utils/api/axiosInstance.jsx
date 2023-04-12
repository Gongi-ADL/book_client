import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://libreria-production.up.railway.app",
    withCredentials: true
  })

export default axiosInstance
