import React, { useEffect, useState } from 'react'
import { getAuthor } from '../../utils/api/fetch/axiosActions'
import Navbar from '../Navbar/Navbar'
import './Author.css'

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
            <div className="author-container">
                {Author?.map(autor => (
                    <div key={autor.author_id} className='author-card'>
                        <div className="id-container">
                            <span className='id-author'>
                                ID:
                            </span>
                            <p>{autor?.author_id}</p>
                        </div>
                        <div className="name-container">
                            <span className='name-author'>
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