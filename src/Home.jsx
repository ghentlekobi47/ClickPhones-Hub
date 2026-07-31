import React from 'react'
import Navbar from './Home/Navbar/Navbar'
import Courosel from './Home/Courosel/Courosel'
import BrandSlider from './Home/Shopbybrand/Shopbybrand'
import Timer from './Home/TimeBomb/Timer'
import Subscribe from './Home/Subscribe/Subscribe'
import Testimonials from './Home/Testimonials/Testimonials'
import Footer from './Home/Footer/Footer'

const Home = () => {
  return (
    <>
     
     <Courosel/>
     <BrandSlider/>
     <Timer/>
     <Subscribe/>
     <Testimonials/>
     
    </>
  )
}

export default Home