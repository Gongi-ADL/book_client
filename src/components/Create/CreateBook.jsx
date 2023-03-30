import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { getAuthor, handleCreate } from '../../utils/api/fetch/axiosActions';
import ProtectRoutes from '../../utils/ProtectRoutes';
import * as Yup from 'yup';

const CreateBook = () => {
  const createSchema = Yup.object({
    book: Yup.string().min(5).required('You must provide a title'),
    price: Yup.string().required('You must provide a price'),
    description: Yup.string().min(60).required('You must provide a description'),
    type: Yup.string().required('You must provide a type'),
    author: Yup.string().required('You must provide an author'),
    date: Yup.date().required('You must provide a date'),
  })
  const [Author, setAuthor] = useState([]) 

  const getAuthors = async () => {
      const response = await getAuthor()
      setAuthor(response)
  }

  function notifyByCreation(){
    toast.success('Book succesfully created!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        Navigate('/home')
      }
      });
  }

  useEffect(() => {
      getAuthors()
  }, [])
  const Navigate = useNavigate()
  const onSubmit = async (values) => {
    values.preventDefault()
    let upload = new FormData()
    upload.append('file', formik.values.image, 'image')
    upload.append('book', formik.values.book)
    upload.append('price', formik.values.price)
    upload.append('descrip', formik.values.description)
    upload.append('type', formik.values.type)
    upload.append('author', formik.values.author)
    upload.append('date', formik.values.date)
      try {
        await handleCreate(upload)
        notifyByCreation()
      } catch (error) {
        console.error(error)
      }
    }
    const protectRoutes = () => {
      ProtectRoutes
    }
    
    useEffect(() => {
      protectRoutes()
    })
    
    const formik = useFormik({
      initialValues: {
        book: '', 
        price: '', 
        description: '', 
        type: '', 
        author: '', 
        image: '', 
        date: '' 
      }, 
      onSubmit, 
      validationSchema: createSchema,
      validateOnBlur: true})
  
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='shadow-md bg-white h-[600px] w-[400px] overflow-x-auto'>
          <div className='font-bold text-2xl font-[Poppins] text-center h-24 flex items-center justify-center'>
            Create a Book
          </div>
          <form onSubmit={onSubmit}>
          <div className='p-4 flex flex-col'>
          <label htmlFor="book">Name:</label>
          <input
            type="text"
            id="book"
            name="book"
            value={formik.values.book}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='bg-gray-200 text-left p-1'/>
            {formik.errors.book && formik.touched.book && <span className='text-red-400'>{formik.errors.book}</span>}
          </div>
          <div className='p-4 flex flex-col'>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formik.values.price}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className='bg-gray-200 text-left p-1'/>
            {formik.errors.price && formik.touched.price && <span className='text-red-400'>{formik.errors.price}</span>}
          </div>
          <div className='p-4 flex flex-col'>
          <label htmlFor="descrip">Description:</label>
          <textarea cols="30" rows="10" id="description"
            name="description"
            value={formik.values.description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className='bg-gray-200 text-left p-1 h-20 resize-none'/>
            {formik.errors.description && formik.touched.description && <span className='text-red-400'>{formik.errors.description} </span>}
          </div>
          <div className='p-4 flex flex-col'>
          <label htmlFor="type">Book Type:</label>
          <input
            type='text'
            id="type"
            name="type"
            onBlur={formik.handleBlur}
            value={formik.values.type}
            onChange={formik.handleChange}
            className='bg-gray-200 text-left p-1'/>
            {formik.errors.type && formik.touched.type && <span className='text-red-400'> {formik.errors.type} </span>}
          </div>
          <div className='p-4 flex flex-col'>
          <label htmlFor="author">Book Author:</label>
          <select name="author" id='author'  onChange={formik.handleChange} 
          onBlur={formik.handleBlur} value={formik.values.author}
          className='bg-gray-200 text-left p-1'>
            <option value={null}>Select an author</option>
          {Author?.map(autor => (
                    <option key={autor.author_id} className='author-card' value={autor?.author_id}> {autor?.author_id} - {autor?.author_name}</option>
                ))}
          </select>
          {formik.errors.author && formik.touched.author && <span className='text-red-400'> {formik.errors.author} </span>}
          </div>
          <div className='p-4 flex flex-col'>
          <label htmlFor="image" className='mb-1'>Add a Cover Image:</label>
          <input id="image" name="image" type="file" accept='image/' className='text-left p-1'  onChange={(event) => {
            formik.setFieldValue("image", event.currentTarget.files[0]);
          }} />
          </div>
          <div className='p-4 flex flex-col'>
          <label htmlFor="date">Date Created:</label>
          <input
            type='date'
            id="date"
            name="date"
            value={formik.values.date}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={formik.errors.date && formik.touched.date ? 'error-input': ""} />
            {formik.errors.date && formik.touched.date && <span className='text-red-400'> {formik.errors.date} </span>}
          </div>
          <div className='flex items-center justify-center gap-5 mb-2'>
            <button onClick={() => {
            Navigate('/home')
            }} className='bg-gray-200 p-2 hover:bg-gray-300 duration-500 rounded-md'>Cancel</button>
            <button className='bg-gray-200 p-2 hover:bg-gray-300 duration-500 rounded-md' type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    )
  };

export default CreateBook