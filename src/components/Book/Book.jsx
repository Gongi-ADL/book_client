import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBook, handleDelete } from '../../utils/api/fetch/axiosActions'
import ProtectRoutes from '../../utils/ProtectRoutes'
import Navbar from '../Navbar/Navbar'
import './Book.css'
const Book = () => {
  ProtectRoutes
  const Navigate = useNavigate()
  const [Book, setBook] = useState({})
  const {id} = useParams()
  const takeData = async () => {
    const response = await getBook(id)
    setBook(response)
  }
  
  useEffect(() => {
    takeData()
  }, [id])

  const deleteBook = async (event) => {
    try {
      event.preventDefault()
      await handleDelete(id)
      Navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  const updateBook = (id) => {
    Navigate(`update/${id}`)
  }
    return (
    <div>
      <Navbar />
      <div className='cardbook-container'>
        <div className="card-container">
          <div className="img-book">
            <img src={Book.book_file?.book_img} alt="" />
          </div>
          <div className="info-book">
            <div className='title'>
              <span>{Book?.book_name}</span> 
            </div>
            <div className='book-extras'>
              <p className='p-box'>
                <span className='sub-title'>Genre:</span> <br />
                <span className='sub-content'>{Book.book_desc?.type}</span>
              </p>
              <p className='p-box'>
                <span className='sub-title'>Author:</span> <br />
                <span className='sub-content'>{Book.author?.author_name}</span>
              </p>
              <p className='p-box'>
                <span className='sub-title'>Price:</span> <br />
                <span className='sub-content'>{Book?.book_price}</span>
              </p>
            </div>
          <div className="desc-book">
            <span className='sub-title'>Description:</span><hr />
            <p>{Book.book_desc?.book_desc}</p>
          </div>
          <div className='buttons'>
            <a onClick={deleteBook} className='button'>
              Delete Book
            </a>
            <a onClick={() => updateBook(id)} className='button'>
              Update Book
            </a>
          </div>
          </div>

        </div>
      </div>
    </div>
    )
  }
import { useParams } from 'react-router-dom'
import { handleBook } from '../../utils/api/fetch/axiosActions'
import './Book.css'
const Book = () => {
  const [Book, setBook] = useState('')
  const {id} = useParams()
  useEffect(() => {
    const takeData = async () => {
      const response = await handleBook(id)
      setBook(response)
    }
    takeData()
  }, [id])

  //haciendo comprobación de datos para evitar el error donde el array es enviado estando vacío (book.book_file.book_img en este caso)
  if (Book == ''){

  }
  else{
    return (
      <div className='cardbook-container'>
        <div className="card-container">
          <div className="img-book">
            <img src={Book.book_file.book_img} alt="" />
          </div>
          <div className="info-book">
          <h1>{Book.book_name}</h1>
          <h2>{Book.book_desc.type}</h2>
          <h3>{Book.author.author_name}</h3>
          <h4>{Book.book_price}</h4>
          <div className="desc-book">
            <p>{Book.book_desc.book_desc}</p>
          </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Book