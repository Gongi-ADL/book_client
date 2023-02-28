import React, { useState } from 'react';
import './Login.css'
import axiosInstance from '../utils/api/axiosInstance';
import { useLocalStorage } from '../hooks/useLocalStorage';


const LoginForm = () => {

  const [user, setUser] = useState({
    usuario: '',
    password: ''
  })

  const changeHandler = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      await axiosInstance.post('/login', { usuario, password })
        .then((response) => {
        console.log(response.data);
        window.localStorage.setItem('loggeado', 'logged')
      })
    }catch(error) {
        console.error(error);
      };
  };

  const {usuario, password} = user
  
  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="usuario">Username:</label>
        <input
          type="text"
          id="usuario"
          name='usuario'
          value={usuario}
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
