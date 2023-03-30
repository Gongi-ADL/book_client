import React, { useEffect, useState } from 'react'
import { getAuthor } from '../../utils/api/fetch/axiosActions'
import Navbar from '../Navbar/Navbar'

const Author = () => {
    const [Author, setAuthor] = useState([]) 

    const getAuthors = async () => {
        const response = await getAuthor()
        setAuthor(response)
    }

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="p-10 container mx-auto flex justify-start items-center gap-24 flex-wrap">
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
                            <p>{autor.author_name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Author