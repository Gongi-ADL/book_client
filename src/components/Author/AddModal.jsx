import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { createAuthor } from '../../utils/api/fetch/axiosActions'
import { useFormik } from 'formik'

const AddModal = ({isOpen}) => {
    const Navigate = useNavigate()
  const notifybyCreation = () => {
    toast.success('Author succesfully added!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        isOpen(false)
        Navigate('/home/author')
      }
      });
  }

  const handleCreation = async (values) => {
        try {
          await createAuthor(formik.values.name)
          notifybyCreation()
          Navigate('/home/author')
        } catch (error) {
          console.error(error)
        }
      }

    const formik = useFormik ({
      initialValues: {
        name: ''
      }
    })
  return (
    <div className='bg-gray-400 bg-opacity-50 fixed left-0 bottom-0 h-screen w-screen flex justify-center items-center'>
        <form className='bg-white container w-[400px] h-[250px] flex flex-col p-8 rounded-md shadow-md'>
            <div className='text-center w-full h-[200px] text-base flex flex-col'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className='bg-gray-200 text-left p-1'
                />
            </div>
            <div className='flex flex-wrap gap-3 items-center justify-center text-base'>
                <a className='p-2 w-28 text-center text bg-red-400 text-black hover:bg-red-800 hover:text-white hover:font-bold cursor-pointer' onClick={ () => isOpen(false)}> Cancel </a>
                <a className='p-2 w-28 text-center text bg-blue-300 hover:bg-blue-600 hover:text-white cursor-pointer' onClick={handleCreation}> Create </a>
            </div>

        </form>
    </div>
  )
}

export default AddModal