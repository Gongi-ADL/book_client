import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/api/axiosInstance'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import ProtectRoutes from '../../utils/ProtectRoutes'
const Home = () => {
    const protectRoutes = ProtectRoutes()
    const [Books, setBooks] = useState([])
    const getBook = async () =>{

        try{
            const response = await axiosInstance.get('/book')
            setBooks(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => { getBook(), protectRoutes})
  return (
    <div>
        <Navbar /> 
    <div className='book-container'>
        {Books.map(book => (<div key={book.id_book} className='book-card'>
        <h1 className='book-title'> {book.book_name} </h1>
        <h2 className='book-price'> {book.book_price} </h2>
        <h3 className='book-date'> {book.book_date} </h3>
        <button className='desc-button'> Ver mas </button>
        </div>)
        )}
    </div>
    </div>
  )
}

export default Home