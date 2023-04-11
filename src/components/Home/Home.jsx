import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ProtectRoutes from '../../utils/ProtectRoutes'
import { useNavigate } from 'react-router-dom'
import { getBooks } from '../../utils/api/fetch/axiosActions'
const Home = () => {
    const Navigate = useNavigate()
    const protectRoutes = ProtectRoutes()
    const [Books, setBooks] = useState([])
    useEffect(() => { 
        const getDatas = async () => {
            const response = await getBooks()
            setBooks(response)
        } 
        getDatas(), protectRoutes}, [])

    const handleNavigate = (id) => {
        Navigate(`/home/book/${id}`)
    }
        return (
    <div>
                <Navbar /> 
        <div className='container mx-auto w-full flex flex-wrap justify-start gap-5 items-center p-3'>
                {Books?.map(book => (<div key={book.id_book} className='shadow-md gap-3'>
                    <div className='bg-white h-[500px] w-[270px]'>
                    <div className='h-48'>
                    <img srcSet={book.book_file.book_img} className='object-fill w-full h-full' alt="" />
                    </div>
            <div>
                <div className="pl-3 pt-3 font-bold text-xl font-[Poppins] text-gray-800 h-14 flex items-center">
                    <a className='hover:text-gray-400 duration-500 cursor-pointer line-clamp-2' onClick={() => handleNavigate(book.id_book)}>
                        {book.book_name}
                    </a>
                </div>
                <div className='p-3 text-justify'>
                    <span className='font-bold block mt-3'> Description: </span>
                    <p className='line-clamp-3 h-19'> 
                        {book.book_desc.book_desc} 
                    </p>
                    <span className='block mt-3 font-bold'>
                        Author: <br /> <span className='font-normal h-4 block'> {book.author.author_name} </span>
                    </span>
                </div>
                <div className='text-center mt-3 w-full'>
                <a onClick={() => handleNavigate(book.id_book)} className='bg-slate-500 text-white p-2 rounded-md cursor-pointer hover:bg-slate-700 duration-500'>
                Leer más  
                </a>
                </div>
            </div>
                
                
                </div>
            </div>)
                )}
        </div>
    </div>
        )
    }


export default Home
