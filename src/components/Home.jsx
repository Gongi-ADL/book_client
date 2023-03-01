import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/api/axiosInstance'
import './Home.css'
const Home = () => {
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
    })
    
  return (
    <div>
        {Books.map(book => (<div key={book.id_book}>
        <h1>{book.book_name}</h1>
        <h2>{book.book_price}</h2>
        <h3>{book.book_date}</h3>
        </div>)
        )}
    </div>
  )
}

export default Home