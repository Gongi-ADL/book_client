import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './UpdateBook.css'
import { handleUpdate } from '../../utils/api/fetch/axiosActions'
import { getBook } from '../../utils/api/fetch/axiosActions'

const UpdateBook = () => {

  const {id} = useParams()
  const Navigate = useNavigate()
  const [Book, setBook] = useState({})
  const takeData = async () => {
    const response = await getBook(id)
    console.log(response)
    setBook(response)
  }
  useEffect(() => {
    takeData()
  }, [id])

  const onSubmit = async (values) => {
    values.preventDefault()
    let upload = new FormData()
    upload.append('file', formik.values.image, 'image')
    upload.append('book', formik.values.book)
    upload.append('price', formik.values.price)
    upload.append('descrip', formik.values.descrip)
    upload.append('type', formik.values.type)
    upload.append('author', formik.values.author)
    upload.append('date', formik.values.date)
      try {
        await handleUpdate(id, upload)
        Navigate('/home')
      } catch (error) {
        console.error(error)
      }
    }

    const formik = useFormik({initialValues: {book: Book.book_name, price: Book.book_price, descrip: Book.book_desc?.book_desc, type: Book.book_desc?.type, author: Book.author?.author_id, image: '', date: Book.book_date }, enableReinitialize: true, onSubmit, validateOnBlur: true})
  
    return (
      <div className="big-container">
        <form className="update-form" id='form' onSubmit={onSubmit}>
          <label htmlFor="book">Name:</label>
          <input
            type="text"
            id="book"
            name="book"
            value={formik.values.book}
            onChange={formik.handleChange}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <label htmlFor="descrip">Description:</label>
          <input
            type="text"
            id="descrip"
            name="descrip"
            value={formik.values.descrip}
            onChange={formik.handleChange}
          />
          <label htmlFor="type">Book Type:</label>
          <input
            type='text'
            id="type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          />
          <label htmlFor="author">Book Author:</label>
          <input
            type='text'
            id="author"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          <label htmlFor="image">Add a Cover Image:</label>
          <input id="image" name="image" type="file" onChange={(event) => {
            formik.setFieldValue("image", event.currentTarget.files[0]);
          }} />
          <label htmlFor="date">Date Created:</label>
          <input
            type='date'
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default UpdateBook