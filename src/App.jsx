import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/home'

const app = () => {
  return(
  <Router>
    <Routes> 
      <Route path='/'>
        <Route path='navbar' element={<Navbar />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default app