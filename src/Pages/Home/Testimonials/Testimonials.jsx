
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-server-seven-gamma.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    console.log(reviews);
    return (
        <div>
            <SectionTitle
               subHeading='What our client say'
               heading='TESTMONIALS'
            >
</SectionTitle>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">  
         {
            reviews.map(review=>
                <SwiperSlide key={review._id}>
                    

                    <div className='m-24 flex flex-col items-center mx-24'>
                    <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                        <p>{review.details}</p>
                        <h2 className='text-2xl text-orange-600 py-4'>{review.name}</h2>
                    </div>
                </SwiperSlide>
                )
         }
         </Swiper>
        </div>
    );
};

export default Testimonials;