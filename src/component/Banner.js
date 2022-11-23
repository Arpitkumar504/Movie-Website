import React from 'react'
import first from './images/first.jpeg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Banner = () => {
    return (
        <div className='banner'>
            <Swiper
                loop={true}
                spaceBetween={300}
                slidesPerGroup={1}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={first} alt="first" className="imgstyle"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={second} alt="second" className="imgstyle"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} alt="third" className="imgstyle"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fourth} alt="fourth" className="imgstyle"/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner
