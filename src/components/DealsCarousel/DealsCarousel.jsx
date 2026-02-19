import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import DealCard from '../DealCard/DealCard'
import { drivers } from '../../data/drivers/drivers'
import './DealsCarousel.css'

const topDrivers = [...drivers].sort((a, b) => b.overallScore - a.overallScore).slice(0, 6)

export default function DealsCarousel() {
  return (
    <section className="deals">
      <div className="container">
        <div className="deals__header">
          <h2 className="deals__heading">Top Ranked Drivers</h2>
          <p className="deals__subheading">
            The highest-scoring drivers in our independent testing
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            651: { slidesPerView: 2.2, spaceBetween: 16 },
            900: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
        >
          {topDrivers.map((club) => (
            <SwiperSlide key={club.id}>
              <Link to={`/drivers/${club.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <DealCard deal={club} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
