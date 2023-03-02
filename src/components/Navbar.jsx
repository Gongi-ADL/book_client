import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axiosInstance from '../utils/api/axiosInstance'

//importando diseños:
import './Navbar.css'

const Navbar = () => {
  const Navigate = useNavigate()
  const handleLogout = async () => {
    try{
      const response = await axiosInstance.get('/logout')
      response ? console.log(response.data) : console.log('No existen datos de respuesta')
      Navigate('/login')
      window.localStorage.setItem('loggeado', 'deslogeado')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <header> 
      <div className='image-title'>
        <img src="https://imgs.search.brave.com/X4TmVaNeeio6oN-CxgwELyur6SA--uiKX3siVcmNHbg/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9ib29rL2Jvb2tf/UE5HMjExNi5wbmc" alt="" srcset="" width="80px"/>
        <h1>Books Library</h1>
      </div>
      <div className='nav'>
        <a onClick={() => Navigate('/home')}>Home</a>
        <a>Somewhere</a>
        <a>Somewhere</a>
        <a onClick={handleLogout}>Logout</a>
      </div>
    </header>
  )
}

export default Navbar