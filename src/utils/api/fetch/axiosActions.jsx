import { useNavigate } from "react-router-dom"
import axiosInstance from "../axiosInstance"

const handleBook = async (id) => {
    try {
        const response = await axiosInstance.get(`/book/${id}`)
        return response.data[0]
    } catch (error) {
        console.error(error)
    }
}

const getBook = async () =>{

    try{
        const response = await axiosInstance.get('/book')
        return response.data
    } catch (error) {
        console.error(error)
    }
}


const handleLogin = async (email, password) => {
    try{
        await axiosInstance.post('/login', { email, password })
        localStorage.setItem('loggeado', 'logged')
    } catch(error) {
        console.error(error);
      };
  };

const handleRegister = async (usuario, email, password) => {
    try{
          await axiosInstance.post('/register', { usuario, email, password })
          Navigate('/login')
      } catch(error) {
          console.error(error);
        };
    }
export {
    handleBook,
    getBook,
    handleLogin,
    handleRegister
}