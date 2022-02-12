import React, { useState, useCallback, useEffect } from 'react'
import { FeaturedMealCard } from '../components'
import { getFeaturedMeals } from '../services'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const FeaturedMeals = () => {
  const [featuredMeals, setFeaturedMeals] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getFeaturedMeals().then((result) => {
      setFeaturedMeals(result)
      setDataLoaded(true)
    })
  }, [])

  return (
    <div className="px-4">
      <Swiper
        dir="rtl"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataLoaded &&
          featuredMeals.map((meal, index) => (
            <SwiperSlide key={index}>
              <FeaturedMealCard meal={meal} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default FeaturedMeals
