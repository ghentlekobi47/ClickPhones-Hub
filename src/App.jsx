import React from 'react'
import Home from './Home'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Brand from './Components/Brands/Brand'
import Navbar from './Home/Navbar/Navbar'
import Footer from './Home/Footer/Footer'
import BuyNow from './Components/BuyNow/BuyNow'
import CartPage from './CartPage/CartPage'
import BrandSlider from './Home/Shopbybrand/Shopbybrand'
import Subscribe from './Home/Subscribe/Subscribe'


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/brand' element = {<Brand/>} />
      <Route path='/brand/:brandName' element={<Brand/>} />
      <Route path='/product/:id' element = {<BuyNow/>} />
      <Route path='/cart' element = {<CartPage/>} />
      <Route path='/subscribe' element = {<Subscribe/>} />
    </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App