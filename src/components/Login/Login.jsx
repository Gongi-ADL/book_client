import React, { useEffect, useState } from 'react';
import './Login.css'
import { handleLogin } from '../../utils/api/fetch/axiosActions';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axiosInstance from '../../utils/api/axiosInstance';


const LoginForm = () => {
  const Navigate = useNavigate()
  
  const onSubmit = async (values) => {
    try {
      await handleLogin(formik.values.email, formik.values.password)
      Navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }
  const formik = useFormik({initialValues: {
    email: '',
    password: ''
  }, validateOnBlur: true, 
  onSubmit})

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
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type='button' onClick={formik.handleSubmit}>Submit</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
