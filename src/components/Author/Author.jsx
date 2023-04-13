import React, { useEffect, useState } from 'react'
import { getAuthor } from '../../utils/api/fetch/axiosActions'
import Navbar from '../Navbar/Navbar'
import ProtectRoutes from '../../utils/ProtectRoutes'
import Modal from './Modal'
import AModal from './AddModal'

const Author = () => {
    const [Author, setAuthor] = useState([]) 
    const [ActualAuthor, setActualAuthor] = useState('')
    const [IsOpen, setIsOpen] = useState(false)
    const [AddModal, setAddModal] = useState(false)
    const protectRoutes = ProtectRoutes()
    const getAuthors = async () => {
        const response = await getAuthor()
        setAuthor(response)
    }
    useEffect(() => {
        getAuthors(), protectRoutes
    }, [IsOpen, AddModal])

    const openModal = (id) => {
        setActualAuthor(id)
        setIsOpen(!IsOpen)
    }
    const openAddModal = () => {
        setAddModal(!AddModal)
    }
    return (
        <div>
            <Navbar />
            <div className="container mx-auto w-full flex flex-col flex-wrap justify-start gap-5 items-center p-3 sm:flex-row">
                {Author?.map(autor => (
                    <div key={autor.author_id} className='shadow-md bg-white w-60 p-4'>
                        <div className="id-container">
                            <span className='font-bold'>
                                ID:
                            </span>
                            <p>{autor?.author_id}</p>
                        </div>
                        <div className="name-container">
                            <span className='font-bold'>
                                Name:
                            </span>
                            <p>{autor?.author_name}</p>
                        </div>
                        <div className='flex justify-end mt-2'>
                            <a className='bg-red-500 rounded-md font-semibold text-white cursor-pointer hover:bg-red-700 duration-300 w-32 p-1 text-center' onClick={() => openModal(autor.author_id)}>
                                Delete
                            </a>
                        </div>
                        {IsOpen && <Modal isOpen={setIsOpen} authorid={ActualAuthor} />}
                    </div>
                ))}
                <div className='shadow-md bg-white w-60 h-48 flex justify-center items-center text-8xl cursor-pointer hover:bg-gray-200 duration-300'>
                    <a onClick={openAddModal}>
                        {IsOpen ? '' : <ion-icon name="add-outline"></ion-icon> } 
                    </a>
                    {AddModal && <AModal isOpen={setAddModal} />}
                </div>

            </div>
        </div>
    )
}
export default Author