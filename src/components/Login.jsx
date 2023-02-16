import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const user_url = axios.create({
  baseURL: import.meta.env.VITE_BACKSERVER_HOST
})


const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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
  
  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="usuario">Username:</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
