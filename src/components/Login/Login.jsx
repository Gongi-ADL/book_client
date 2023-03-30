import React from 'react';
import { handleLogin } from '../../utils/api/fetch/axiosActions';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const LoginSchema = Yup.object({
    email: Yup.string().email().required('Must provide an email address'),
    password: Yup.string().required('Pasword is required')
  })
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
  },
  validationSchema: LoginSchema, 
  validateOnBlur: true, 
  onSubmit})

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='shadow-md bg-white h-[400px] w-[400px]'>
        <div className='font-bold text-2xl font-[Poppins] text-center h-24 flex items-center justify-center'>
          Log In
        </div>
      <form>
        <div className='p-4 flex flex-col'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name='email'
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className='bg-gray-200 text-left p-1'/>
          {formik.errors.email && formik.touched.email && <span className='text-red-400'> {formik.errors.email} </span>}
        </div>
        <div className='p-4 flex flex-col'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          className='bg-gray-200 text-left p-1'/>
          {formik.errors.password && formik.touched.password && <span className='text-red-400'> {formik.errors.password} </span>}
        </div>
        <div className='flex items-center justify-center flex-col'>
          <button type='button' className='bg-gray-200 p-2 hover:bg-gray-300 duration-500 rounded-md' onClick={formik.handleSubmit}>Submit</button>
          <a className='mt-1 text-blue-500 cursor-pointer' onClick={() => Navigate('/register')}>Create new account</a>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
