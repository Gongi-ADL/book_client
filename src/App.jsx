import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const app = () => {
  return(
  <Router>
    <Routes> 
      <Route path='/'>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />      
      </Route>
    </Routes>
  </Router>
  )
}

export default app