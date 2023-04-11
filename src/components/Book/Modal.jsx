import React from 'react'
import { handleDelete } from '../../utils/api/fetch/axiosActions'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Modal = ({isOpen, bookId}) => {
    const Navigate = useNavigate()
  const notifybyDelete = () => {
    toast.success('Book was succesfully deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        Navigate('/home')
      }
      });
  }
  const deleteBook = async (event) => {
        try {
          event.preventDefault()
          await handleDelete(bookId)
          notifybyDelete()
        } catch (error) {
          console.error(error)
        }
      }
  return (
    <div className='bg-gray-400 bg-opacity-50 fixed left-0 bottom-0 h-screen w-screen flex justify-center items-center'>
        <div className='bg-white container w-[400px] h-[250px] flex flex-col gap-1 p-5 rounded-md shadow-md'>
            <div className='text-center w-full h-[200px]'>
                <h1 className='text-black font-extrabold font-[Poppins] text-4xl'>Want to delete this book?</h1>
                <p className='mt-2 text-sm text-red-600 italic font-serif'> This can NOT be undone </p>
            </div>
            <div className='flex flex-wrap gap-3 items-center justify-center'>
                <a className='p-2 w-28 text-center text bg-blue-300 hover:bg-blue-600 hover:text-white cursor-pointer' onClick={ () => isOpen(false)}> No </a>
                <a className='p-2 w-28 text-center text bg-red-400 text-black hover:bg-red-800 hover:text-white hover:font-bold cursor-pointer' onClick={deleteBook}> Yes </a>
            </div>

        </div>
    </div>
  )
}

export default Modal