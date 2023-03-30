import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const About = () => {
    const Navigate = useNavigate()
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
                This project was created in the porpuse to prove my abilities to create an API REST
                and consume it... Was created with: VITE - REACT - JS - AXIOS - FORMIK.
            </p>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default About