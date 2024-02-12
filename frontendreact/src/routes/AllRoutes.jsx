import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Authentication/Login/Login'
import Signup from '../pages/Authentication/Signup/Signup'
import Payment from '../pages/Payment/Payment'
import Products from '../pages/Products/Products'
import SingleProduct from '../pages/Products/SingleProduct'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
// import Admin from '../pages/Admin/Admin'
import { Box } from '@chakra-ui/react'
import NotFound from '../pages/NotFound/NotFound'
import ProductForm from '../components/Admin/Products/AdminAddProduct'
import AdminLogin from '../components/Admin/Authentication/Login'
import AdminSignup from '../components/Admin/Authentication/Signup'
import ForgotPasswordForm from '../pages/Authentication/ForgetPassword/FindYourAccoutAndResetLink'
import ResetPasswordForm from '../pages/Authentication/ForgetPassword/SetNewPass'
import  Cart  from '../pages/Cart/Cart'
import ProductsMobile from '../pages/Products/Mobile/Mobile'
import ProductsLaptop from '../pages/Products/Laptop/Laptop'
import ProductsGrocery from '../pages/Products/Groceries/Grocery'

const AllRoutes = () => {
  return (
    <Box mt={10}>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/user/signup' element={<Signup/>}/>
    <Route path='/user/forgetpass' element={<ForgotPasswordForm/>}/>
    <Route path='/user/resetpass' element={<ResetPasswordForm/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/product/:id' element = {<SingleProduct/>}/>
    <Route path='/products/electronics' element={<ProductsMobile/>}/>
    <Route path='/products/grocery' element={<ProductsGrocery/>}/>
    <Route path='/products/laptop' element={<ProductsLaptop/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/admin/product/add' element={<ProductForm/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/>
    <Route path='/admin/signup' element={<AdminSignup/>}/>
    <Route path='/*' element={<NotFound/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Box>
  )
}

export default AllRoutes