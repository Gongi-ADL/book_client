import React from 'react'
import Login from '../components/Login/Login'
import Navbar from '../components/Navbar/Navbar'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import Book from '../components/Book/Book'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const ViewRoutes = () => {
  return (
  <Router>
    <Routes> 
      <Route path='/'>
        <Route path='navbar' element={<Navbar />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='book/:id' element={<Book />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default ViewRoutes