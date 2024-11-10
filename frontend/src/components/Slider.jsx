import React, { useRef, useState } from 'react';
//` Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Typewriter from 'typewriter-effect';

//` Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../swiper.css"

//` import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Button1 } from './layout/ui/Button';
import { useNavigate } from "react-router-dom";

function Slider() {
    const navigate = useNavigate();
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {/* Sliders  */}
                <SwiperSlide>
                    <div className="flex items-center w-full h-screen justify-normal bg-[url('/images/background-texture.jpg')] dark:bg-[url('/images/dark-background-texture.png')] bg-center bg-no-repeat bg-cover">
                        <div className='flex items-center justify-end w-full h-full pl-5 pr-10 lg:w-1/2 '>
                            <div className='flex flex-col justify-center gap-5 text-left items-left'>
                                <span className='text-3xl font-medium text-[#e97730]'>
                                    Top Selling!
                                </span>
                                <h1 className='font-bold text-5xl text-[#383838] dark:text-white'><Typewriter options={{
                                    strings: ["SEE THE LATEST DEALS"],
                                    loop: true,
                                    autoStart: true,
                                    cursor: "_"
                                }} /></h1>

                                <p className='text-[#383838] dark:text-white'>Find everything you need in one place, from trending styles to everyday essentials. Get it shipped directly to your door!</p>
                                <Button1 onclick={() => navigate("/shop")} text='Shop Now' />
                            </div>
                        </div>
                        <div className='items-end hidden w-1/2 h-full lg:flex justify-normal'>
                            <img src="/images/girl-slider.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full h-screen justify-normal bg-[url('/images/background-texture.jpg')] dark:bg-[url('/images/dark-background-texture.png')] bg-center bg-no-repeat bg-cover">
                        <div className='flex items-center justify-end w-full h-full pl-5 pr-10 lg:w-1/2 '>
                            <div className='flex flex-col justify-center gap-5 text-left items-left'>
                                <span className='text-3xl font-medium text-[#e97730]'>Shop Sustainability!</span>
                                <h1 className='font-bold text-5xl text-[#383838] dark:text-white'><Typewriter options={{
                                    strings: ["UNLOCK EXCLUSIVE OFFERS"],
                                    loop: true,
                                    autoStart: true,
                                    cursor: "_"
                                }} /></h1>

                                <p className='text-[#383838] dark:text-white'>Explore thousands of products across all categories, carefully selected for quality and
                                    value.</p>
                                <Button1 onclick={() => navigate("/shop")} text='Shop Now' />
                            </div>
                        </div>
                        <div className='items-end hidden w-1/2 h-full lg:flex justify-normal'>
                            <img src="/images/men-slider.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider