import React, { useState } from 'react';
import './Login.css'
import axiosInstance from '../utils/api/axiosInstance';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const Navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
        await axiosInstance.post('/login', { email, password })
        window.localStorage.setItem('loggeado', 'logged')
        Navigate('/home')      
    } catch(error) {
        console.error(error);
      };
  };

  const {email, password} = user
  
  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name='email'
          value={email}
          onChange={changeHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={password}
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
