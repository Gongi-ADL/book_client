import React, { useEffect, useState } from 'react';
import './Login.css'
import { handleLogin } from '../../utils/api/fetch/axiosActions';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/api/axiosInstance';


const LoginForm = () => {
  const Navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }
  const {email, password} = user

  const handleSubmit = async (event) => {
    try {
    event.preventDefault()
      await handleLogin(email, password)
      Navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
