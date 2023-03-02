import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/api/axiosInstance'
import './Home.css'
import Navbar from './Navbar'
const Home = () => {
    const Navigate = useNavigate()
    const [Books, setBooks] = useState([])
    useEffect(() => {
        const getBook = async () =>{

            try{
                const response = await axiosInstance.get('/book')
                setBooks(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getBook()

        const logConfirm = async () => {
            const getLog = window.localStorage.getItem('loggeado')
            if(getLog == 'logged') {

            } else {
                Navigate('/login')
            }
        }
        logConfirm()
    })
  return (
    <div>
        <Navbar />
        <div className='book-container'></div>
        {Books.map(book => (<div key={book.id_book} className='book-card'>
        <h1 className='book-title'> {book.book_name} </h1>
        <h2 className='book-price'> {book.book_price} </h2>
        <h3 className='book-date'> {book.book_date} </h3>
        </div>)
        )}
    </div>
  )
}

export default Home