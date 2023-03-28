import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import { handleRegister } from '../../utils/api/fetch/axiosActions';
import { useFormik } from 'formik';
import axios from 'axios';
const Register = () => {
  const Navigate = useNavigate()
  
  const onSubmit = async (values) => {
      try{
            await axios.post('https://libreria-production.up.railway.app/register', formik.values.username, formik.values.email, formik.values.password)
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