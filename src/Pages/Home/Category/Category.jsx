import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

import { Pagination } from 'swiper/modules';
const Category = () => {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-4xl text-center -mt-16 uppercase text-white'>SALAD</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className='text-4xl text-center -mt-16 uppercase text-white'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className='text-4xl text-center -mt-16 uppercase text-white'>Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className='text-4xl text-center -mt-16 uppercase text-white'>Desert</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h2 className='text-4xl text-center -mt-16 uppercase text-white'>Salad</h2>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Category;