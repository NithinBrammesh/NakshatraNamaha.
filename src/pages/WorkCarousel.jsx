import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WorkCarousel.css'; // Optional styling

const works = [
  { name: 'Rajathadri Royal Inn', link: '/rajath' },
  { name: 'SK Developers', link: '/sk' },
  { name: 'Creative Flexi Pack', link: '/creative' },
  { name: 'Sarang Creations', link: '/sarang' },
  { name: 'Brindavan Constructions', link: '/brindavan' },
  { name: 'Avitri Spices', link: '/avitri' }
];

const WorkCarousel = () => {
  return (
    <div className="work-carousel">
      {/* <h2>Our Work</h2> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 }
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <a href={work.link} className="carousel-box">
              <div className="slide-card">
                <h3>{work.name}</h3>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkCarousel;
