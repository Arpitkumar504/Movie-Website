import React from 'react'
import Card from './Card.js'
import data from './hollydata.js'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hollymovie = () => {
    return (
        <div className='container cardcontainer mt-5'>
            <h1 className='recommend'>Recommended <span className='web'>Hollywood Movie</span></h1>
            <div className='cards'>
                <Swiper
                    loop={true}
                    spaceBetween={300}
                    slidesPerGroup={1}
                    slidesPerView={4}
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
                    {
                        data.map(element => {
                            return (
                                <SwiperSlide>
                                    <Card
                                        name={element.name}
                                        plat={element.plat}
                                        image={element.image}
                                        link={element.link}

                                    />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>

    )
}

export default Hollymovie