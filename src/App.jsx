import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import Product from './pages/Product'
import Order from './pages/Order'



const App = () => {
  


  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Product' element={<Product/>} />
      <Route path='/Order' element={<Order/>} />
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App
