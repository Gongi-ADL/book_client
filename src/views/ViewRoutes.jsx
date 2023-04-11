import React from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Book from '../components/Book/Book'
import About from '../components/About/About'
import CreateBook from '../components/Create/CreateBook'
import UpdateBook from '../components/Update/UpdateBook'
import Author from '../components/Author/Author'

const ViewRoutes = () => {
  return (
  <Router>
    <Routes> 
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home'>
          <Route index element={<Home />} />
          <Route path='book/:id' >
            <Route index element={ <Book />} />
            <Route path='update/:id' element={<UpdateBook />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='create' element={<CreateBook />} />
          <Route path='author'>
            <Route index element={ <Author />} />
          </Route>
        </Route>
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default ViewRoutes