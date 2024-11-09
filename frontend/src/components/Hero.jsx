import React, { useRef, useState } from 'react';
//` Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//` Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//` import required modules
import { Pagination } from 'swiper/modules';

function Hero() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero