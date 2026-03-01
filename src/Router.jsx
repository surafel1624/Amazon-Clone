import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Signin from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Cart from './Pages/Cart/Cart'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/auth" element={<Signin/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/category/:categoryName" element={<Results/>} />
            <Route path="/products/:productId" element={<ProductDetail/>}/>
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routing