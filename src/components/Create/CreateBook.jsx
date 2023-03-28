import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { handleCreate } from '../../utils/api/fetch/axiosActions';
import ProtectRoutes from '../../utils/ProtectRoutes';
import './CreateBook.css'
const CreateBook = () => {
  const Navigate = useNavigate()
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
        await handleCreate(upload)
        Navigate('/home')
      } catch (error) {
        console.error(error)
      }
    }

    const returnButton = () => {
      Navigate('/home')
    }
    const protectRoutes = () => {
      ProtectRoutes
    }
    
    useEffect(() => {
      protectRoutes()
    })
    
    const formik = useFormik({initialValues: {book: '', price: '', descrip: '', type: '', author: '', image: '', date: '' }, onSubmit, validateOnBlur: true})
  
    return (
      <div className="big-container">
        <form className="create-form" id='form' onSubmit={onSubmit}>
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
          <div className='buttons-div'>
            <button onClick={returnButton}>Cancel</button>
            <button type="submit">Create</button>
          </div>
          
        </form>
      </div>
    )
  };

export default CreateBook