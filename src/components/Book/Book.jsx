import React, { useEffect, useState } from 'react'
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