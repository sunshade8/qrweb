import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import phoneImage1 from './images/mainmock.png';
import phoneImage2 from './images/submock.png';
import phoneImage3 from './images/submock1.png';
import phoneImage4 from './images/submock2.png';
import phoneImage5 from './images/submock3.png';
import phoneImage6 from './images/submock4.png';


const SlideView = () => {
  const images = [phoneImage2, phoneImage5, phoneImage3,phoneImage4, phoneImage6, phoneImage1];

  return (
    <div style={{ width: '100%', margin: '0 auto', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20, // Reduced rotation for better visibility
          stretch: 0,
          depth: 50, // Reduced depth to bring slides closer
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={1.6} // Show a bit of the next slide
        centeredSlides={true}
        spaceBetween={1} // Reduced space between slides
        loop={true}
        breakpoints={{
          // Adjust settings for different screen sizes
          480: {
            slidesPerView: 2.5, // Show more of the next slide on larger mobile screens
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2, // Show more slides on tablets
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2.5, // Show more slides on desktops
            spaceBetween: 30,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '350px' }}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: '100%',
                borderRadius: '10px', // Optional: Add rounded corners
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideView;