import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBook} from '../../utils/api/fetch/axiosActions'
import ProtectRoutes from '../../utils/ProtectRoutes'
import Navbar from '../Navbar/Navbar'
import Modal from './Modal'

const Book = () => {
  const [IsOpen, setIsOpen] = useState(false)
  const protectRoutes = ProtectRoutes()
  const Navigate = useNavigate()
  const [Book, setBook] = useState({})
  const {id} = useParams()
  const takeData = async () => {
    const response = await getBook(id)
    setBook(response)
  }
  
  useEffect(() => {
    takeData(), protectRoutes
  }, [id])

  const openModal = () => {
      setIsOpen(!IsOpen)
  }

  const updateBook = (id) => {
    Navigate(`update/${id}`)
  }
    return (
    <div>
      <Navbar />
      <div className='container mx-auto p-10 flex items-center justify-center'>
        <div className="bg-white flex flex-col shadow-md overflow-auto h-[500px] w-[600px]">
          <div className="h-[350px] m-0">
            <img src={Book.book_file?.book_img} className='object-fill w-full h-full' alt="" />
          </div>
          <div className=''>
            <div className='font-bold text-3xl font-[Poppins] p-4'>
              <span>{Book?.book_name}</span> 
            </div>
            <div className="p-4 flex flex-col gap-1">
            <span className='font-bold'>Description:</span>
            <span className='text-justify'>{Book.book_desc?.book_desc}</span>
          </div>
              <div className='p-4 flex flex-col gap-1'>
                <span className='font-bold'>Genre:</span>
                <span>{Book.book_desc?.type}</span>
              </div>
              <div className='p-4 flex flex-col gap-1'>
                <span className='font-bold'>Author:</span>
                <span>{Book.author?.author_name}</span>
              </div>
              <div className='p-4 flex flex-col gap-1'>
                <span className='font-bold'>Price:</span>
                <span>{Book?.book_price}</span>
              </div>
              <div className='flex items-center justify-center gap-5 mb-2'>
            <a onClick={openModal} className='bg-red-400 text-black p-2 cursor-pointer hover:bg-red-600 hover:text-white duration-500 rounded-md'>
              Delete Book
            </a>
            {IsOpen && <Modal isOpen={setIsOpen} bookId={id} />}
            <a onClick={() => updateBook(id)} className='bg-gray-200 p-2 cursor-pointer hover:bg-gray-300 duration-500 rounded-md'>
              Update Book
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>

    )
  }



export default Book