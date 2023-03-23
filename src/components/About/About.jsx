import React from 'react'
import './About.css'
import {useNavigate} from 'react-router-dom'
const About = () => {
    const Navigate = useNavigate()
    return (
        <div className='main-container'>
            <div className='a-header'>
                <h1>About us and the Project</h1>
                <span className='to-home' onClick={() => Navigate('/home')}>
                    Go Home
                </span>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, perferendis 
                est! Architecto aliquam autem, aperiam eligendi aut labore 
                explicabo doloremque dolorem, exercitationem voluptate ad excepturi 
                repellendus hic cupiditate, reiciendis aspernatur.</p>
        </div>
    )
}

export default About