import { useFormik } from 'formik'
import React from 'react'
import { createAuthor } from '../../../utils/api/fetch/axiosActions'
import './Author.css'

const CreateAuthor = () => {

  const onSubmit = async (values) => {
    values.preventDefault()
    try{
          await createAuthor(formik.values.name)
      } catch(error) {
          console.error(error);
        };
    }
  const formik = useFormik({initialValues: {name: ''}, validateOnBlur: true, onSubmit})

    
  return (
    <div className='form-container'>
        <form action="submit" className='author-form' id='form' onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <input type="submit" value='Create'/>
        </form>
    </div>
  )
}

export default CreateAuthor