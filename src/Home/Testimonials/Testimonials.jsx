import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import "swiper/css"
import "swiper/css/navigation"

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Benji",
      rating: "★★★★★",
      comment: "The mobile performance is excellent 🔥 The camera quality is very sharp. Totally worth the price!",
      location: "Accra",
    },
    {
      id: 2,
      name: "Ephriam",
      rating: "★★★★☆",
      comment: "Battery life is great. It easily lasts a full day. Delivery was also very fast 👌",
      location: "Sunyani",
    },
    {
      id: 3,
      name: "Hackman",
      rating: "★★★★★",
      comment: "Gaming performance is amazing 🔥 PUBG runs very smoothly and the display clarity is awesome.",
      location: "Kumasi",
    },
    {
      id: 4,
      name: "Alvin",
      rating: "★★★★☆",
      comment: "The design and color look very stylish 😍 The camera night mode works really well.",
      location: "Tema",
    },
  ]

  return (
    <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-center text-3xl font-semibold text-slate-800">Happy Customers, Real Reviews</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500 }}
        loop={reviews.length > 4}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h4 className="text-lg font-semibold text-slate-800">{review.name}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">{review.comment}</p>
              <p className="mt-4 text-amber-500">{review.rating}</p>
              <small className="mt-2 block text-slate-500">{review.location}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials