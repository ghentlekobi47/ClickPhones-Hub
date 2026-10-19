import React, { lazy, Suspense } from 'react'
import Home from './Home'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Navbar from './Home/Navbar/Navbar'
import Footer from './Home/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'
import ToastProvider from './Components/Toast/ToastProvider'

const Brand = lazy(() => import('./Components/Brands/Brand'))
const BuyNow = lazy(() => import('./Components/BuyNow/BuyNow'))
const CartPage = lazy(() => import('./CartPage/CartPage'))
const CheckoutPage = lazy(() => import('./CheckoutPage/CheckoutPage'))
const OrderConfirmation = lazy(() => import('./CheckoutPage/OrderConfirmation'))
const Subscribe = lazy(() => import('./Home/Subscribe/Subscribe'))
const NotFound = lazy(() => import('./NotFound'))

const PageLoader = () => (
  <div className='flex min-h-[50vh] items-center justify-center'>
    <div className='h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900' aria-label='Loading' />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
    <ToastProvider>
     <ScrollToTop/>
     <Navbar/>
    <Suspense fallback={<PageLoader/>}>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/brand' element = {<Brand/>} />
      <Route path='/brand/:brandName' element={<Brand/>} />
      <Route path='/product/:id' element = {<BuyNow/>} />
      <Route path='/cart' element = {<CartPage/>} />
      <Route path='/checkout' element = {<CheckoutPage/>} />
      <Route path='/order/:id' element = {<OrderConfirmation/>} />
      <Route path='/subscribe' element = {<Subscribe/>} />
      <Route path='*' element = {<NotFound/>} />
    </Routes>
    </Suspense>
     <Footer/>
    </ToastProvider>
    </BrowserRouter>
  )
}

export default App
