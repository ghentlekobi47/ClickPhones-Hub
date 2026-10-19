import React from 'react'
import Courosel from './Home/Courosel/Courosel'
import BrandSlider from './Home/Shopbybrand/Shopbybrand'
import Promos from './Home/Promos/Promos'
import Timer from './Home/TimeBomb/Timer'
import Subscribe from './Home/Subscribe/Subscribe'
import Testimonials from './Home/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
     <title>ClickPhones Hub | Smartphones in Ghana</title>
     
     <Courosel/>
     <BrandSlider/>
     <Promos/>
     <Timer/>
     <Subscribe/>
     <Testimonials/>
     
    </>
  )
}

export default Home