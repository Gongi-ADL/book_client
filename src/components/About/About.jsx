import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const About = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <div className='container mx-auto flex items-center justify-center p-10'>
            <div className='shadow-md bg-white h-[400px] w-[800px] p-4'>
            <div className=' font-bold text-2xl mb-2'>
                <h1>About us and the Project</h1>
            </div>
            <hr />
            <div className='mt-4 text-justify'>
            <p> 
                Created with VITE - React JS this website allows you to create, store, edit and
                delete books.
            </p>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default About