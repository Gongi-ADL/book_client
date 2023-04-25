import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axiosInstance from '../../utils/api/axiosInstance'


const Navbar = () => {
  const Navigate = useNavigate()
  const handleLogout = async () => {
    try{
      await axiosInstance.get('/logout')
      Navigate('/login')
      localStorage.removeItem('loggeado')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800' onClick={() => Navigate('/home')}>
          <span className='text-3xl text-black mr-1 pt-2'> <ion-icon name="book-outline"></ion-icon> </span>
          Book Library
        </div>
        <div className='font-bold text-ls flex gap-2 items-center font-[Poppins] text-gray-800'>
          <a className='md:ml-8 sm:ml-3 hover:text-gray-400 duration-500 cursor-pointer' onClick={() => Navigate('/home/create')}> Create Book </a>
          <a className='md:ml-8 sm:ml-3 hover:text-gray-400 duration-500 cursor-pointer' onClick={() => Navigate('/home/author')}> Authors </a>
          <a className='md:ml-8 sm:ml-3 hover:text-gray-400 duration-500 cursor-pointer' onClick={() => Navigate('/home')}>Home</a>
          <a className='md:ml-8 sm:ml-3 hover:text-gray-400 duration-500 cursor-pointer' onClick={() => Navigate('/home/about')}>About Us</a>
          <a className='md:ml-8 sm:ml-3 hover:text-gray-400 duration-500 cursor-pointer' onClick={handleLogout}>Logout</a>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar