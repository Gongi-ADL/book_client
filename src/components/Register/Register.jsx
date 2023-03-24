import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import { handleRegister } from '../../utils/api/fetch/axiosActions';
import { useFormik } from 'formik';
import axiosInstance from '../../utils/api/axiosInstance'
import { handleRegister } from '../../utils/api/fetch/axiosActions';
const Register = () => {
  const Navigate = useNavigate()
  
  const onSubmit = async (values) => {
      try{
            await handleRegister(formik.values.username, formik.values.email, formik.values.password)
            event.preventDefault();
            await handleRegister(usuario, email, password)
            Navigate('/login')
        } catch(error) {
            console.error(error);
          };
      }

      const formik = useFormik({initialValues: {username: '', email: '', password: ''}, validateOnBlur: true, onSubmit})
  
      return (
        <div className="container">
          <form className="register-form" onSubmit={onSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <label htmlFor="email">email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    };

export default Register