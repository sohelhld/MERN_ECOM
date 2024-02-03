import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Authentication/Login/Login'
import Signup from '../pages/Authentication/Signup/Signup'
import Payment from '../pages/Payment/Payment'
import Products from '../pages/Products/Products'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Admin from '../pages/Admin/Admin'
import { Box } from '@chakra-ui/react'

const AllRoutes = () => {
  return (
    <Box mt={10}>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </Box>
  )
}

export default AllRoutes