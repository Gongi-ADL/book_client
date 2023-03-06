import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import axiosInstance from '../utils/api/axiosInstance'
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



    const handleSubmit = async (event) => {
      try{
            event.preventDefault();
            await axiosInstance.post('/register', { usuario, email, password })
            Navigate('/login')
        } catch(error) {
            console.error(error);
          };
      }

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
    };

export default Register