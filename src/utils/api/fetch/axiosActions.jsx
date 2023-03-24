import axiosInstance from "../axiosInstance"

const getBook = async (id) => {
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

const getBooks = async () =>{
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
 
const handleCreate = async (upload) => {
    try {
        await axiosInstance.post("/book", upload)
      } catch (error) {
        console.error(error)
      }
    }

const handleUpdate = async (id, upload) => {
    try {
        await axiosInstance.put(`/book/${id}`, upload)
      } catch (error) {
        console.error(error)
      }
    }



const handleDelete = async (id) => {
    try{
        await axiosInstance.delete(`/book/${id}`)
    } catch(error){
        console.error(error)
    }
}

const createAuthor = async (name) => {
    try {
        await axiosInstance.post('/author', {name})
    } catch (error) {
        console.error(error)
    }
}

const getAuthor = async () => {
try {
        const response = await axiosInstance.get('/author')
        return response.data
} catch (error) {
    console.error(error)
}
}
export {
    getBook,
    getBooks,
    handleLogin,
    handleRegister,
    handleDelete,
    handleCreate, 
    handleUpdate,
    createAuthor,
    getAuthor
export {
    handleBook,
    getBook,
    handleLogin,
    handleRegister
}