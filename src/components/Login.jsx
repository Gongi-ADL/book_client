import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const user_url = axios.create({
  baseURL: import.meta.env.VITE_BACKSERVER_HOST
})


const LoginForm = () => {
  const [user, setUser] = useState({
    usuario: '',
    password: ''
  })

  const changeHandler = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    user_url.post('/login', { usuario, password }, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
