import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const Navigate = useNavigate()
    const [user, setUser] = useState({
      usuario:'',
      email: '',
      password: ''
    })

    const changeHandler = (event) => {
      setUser({...user, [event.target.name] : event.target.value})
    }

    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_BACKSERVER_HOST,
        withCredentials: true
      })

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axiosInstance.post('/register', { usuario, email, password })
          .then((response) => {
            console.log(response.data);
            Navigate('/login')
          })
          .catch((error) => {
            console.error(error);
          });
      };
      const {usuario, email, password} = user
  
      return (
        <div className="container">
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="usuario"
              value={usuario}
              onChange={changeHandler}
            />
            <label htmlFor="email">email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
}

export default Register