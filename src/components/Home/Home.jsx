import React, { useEffect, useState } from 'react'
import './Home.css'
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
        getDatas(), protectRoutes})

    const handleNavigate = (id) => {
        Navigate(`/home/book/${id}`)
    }
        return (
            <div>
                <Navbar /> 
            <div className='book-container'>
                {Books?.map(book => (<div key={book.id_book} className='card'>
                <div className="img">
                    <img src={book.book_file.book_img} alt="" />
                </div>
                <div className="title">
                    <a onClick={() => handleNavigate(book.id_book)}>
                        {book.book_name}
                    </a>
                    </div>
                    <div className='content'>
                    <p className='desc'> 
                        {book.book_desc.book_desc} 
                    </p>
                </div>
                <div className='verMas'>
                <a onClick={() => handleNavigate(book.id_book)} className='action'>
                Leer más
                <span aria-hidden='true'>
                    →
                </span>  
                </a>
                </div>
                </div>)
                )}
            </div>
            </div>
        )
    }


export default Home