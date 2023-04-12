import axios from "axios"
import axiosInstance from "../axiosInstance"
const getBook = async (id) => {
    try {
        const response = await axiosInstance.get(`/book/${id}`)
        return response.data[0]
    } catch (error) {
        console.error(error)
    }
}

const getBooks = async () =>{

    try{
        const response = await axiosInstance.get('/book')
        return response.data
    } catch (error) {
        console.error(error)
    }
}


const handleLogin = async (email, password) => {
    try{
    const res =  await axios.post('https://librariacrud-i6c8.onrender.com/login', { email, password }, {
        withCredentials: true
  })
    localStorage.setItem('loggeado', 'logged')
    return res
    } catch(error) {
        return error.response.data
      };
  };


const handleRegister = async (usuario, email, password) => {
    try{
        await axiosInstance.post('/register', { usuario, email, password })
      } catch(error) {
          return error.response.data
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

const handleDeleteAuthor = async (id) => {
    try{
        const res = await axiosInstance.delete(`/author/${id}`)
        return res
    } catch (error) {
        console.error(error)
    }
}

const getGenres = async () => {
    try{ 
        const res = await axiosInstance.get('/btype')
        return res.data
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
    getAuthor,
    handleDeleteAuthor,
    getGenres
}
