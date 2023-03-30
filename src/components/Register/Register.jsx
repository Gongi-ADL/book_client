import React from 'react'
import {useNavigate} from 'react-router-dom'
import { handleRegister } from '../../utils/api/fetch/axiosActions';
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Register = () => {
  const Navigate = useNavigate()
  const registerSchema = Yup.object({
    username: Yup.string().min(6).required('Username is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(7).required('Password is required')
  })
  const onSubmit = async (values) => {
    values.preventDefault()
      try{
            await handleRegister(formik.values.username, formik.values.email, formik.values.password)
            Navigate('/login')
        } catch(error) {
            console.error(error);
          };
      }

      const formik = useFormik({
        initialValues: {
          username: '', 
          email: '', 
          password: ''
        },
        validationSchema: registerSchema, 
        validateOnBlur: true, 
        onSubmit})
  
      return (
        <div className='flex items-center justify-center h-screen'>
          <div className='shadow-md bg-white h-[470px] w-[400px]'>
            <div className='font-bold text-2xl font-[Poppins] text-center h-24 flex items-center justify-center'>
              Register
            </div>
          <form onSubmit={onSubmit}>
            <div className='p-4 flex flex-col h-24'>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className='bg-gray-200 text-left p-1'
              />
              {formik.errors.username && formik.touched.username && <span className="text-red-400"> {formik.errors.username} </span>}
            </div>
            <div className='p-4 flex flex-col h-24'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className='bg-gray-200 text-left p-1'/>
              {formik.errors.email && formik.touched.email && <span className="text-red-400"> {formik.errors.email} </span>}
            </div>
            <div className='p-4 flex flex-col h-24'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className='bg-gray-200 text-left p-1'/>
              {formik.errors.password && formik.touched.password && <span className='text-red-400'> {formik.errors.password} </span>}
            </div>
            <div className='flex items-center justify-center flex-col'>
            <button className='bg-gray-200 p-2 hover:bg-gray-300 duration-500 rounded-md' type="submit">Submit</button>
            <a className='mt-1 text-blue-500 cursor-pointer' onClick={() => Navigate('/login')}>Already have an account?</a>
            </div>
          </form>
          </div>
        </div>
      )
    };

export default Register