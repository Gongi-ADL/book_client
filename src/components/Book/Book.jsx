import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axiosInstance from '../../utils/api/axiosInstance'
const Book = () => {
    const {id} = useParams()
    const handleBook = async () => {
        try {
            const response = await axiosInstance.get(`/book/${id}`)
            console.log(response.data[0].id_book)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect( () => {
        handleBook()}, [id]);
  return (
    <div>Book</div>
  )
}

export default Book