import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { LuPlus } from 'react-icons/lu';

import burger1 from '../../../../public/burger1.png';
import burger3 from '../../../../public/burger3.png';
import burger4 from '../../../../public/burger4.png';

export default function FamousBurgerSlider() {
    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper text-white bg-[#0D0E13] w-full"
        >
            <SwiperSlide>
                <div className="flex md:flex-row flex-col-reverse items-center justify-center mx-auto w-[90%]  py-10 2xl:w-[80%]">
                    <div className="text-center md:text-left mx-auto md:mx-0">
                        <p className="headingFont text-3xl md:text-7xl xl:text-8xl mb-4">
                            Worlds Famous Burger
                        </p>
                        <p className="text-white lg:w-3/4 mb-4">
                            100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun
                        </p>
                        <div className="bg-white relative px-2 rounded-full group cursor-pointer py-3 flex justify-between xl:w-2/5 md:w-1/2 mx-auto md:mx-0 text-black">
                            <div className="pl-2 xl:pl-7">
                                <p className="text-2xl font-semibold">
                                    $12.00
                                </p>
                                <p className="font-medium lg:text-sm">
                                    220gr / 600 cal
                                </p>
                            </div>
                            <div className="xl:w-16 xl:h-16 w-10 h-10 flex justify-center items-center text-4xl text-red-500 border-2 group-hover:bg-red-500 group-hover:text-white border-red-500 rounded-full transition-all duration-500">
                                <LuPlus />
                            </div>
                        </div>
                    </div>
                    <Image className="md:w-[90%] w-[80%] mx-auto" src={burger1} alt="Burger 1" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex md:flex-row flex-col-reverse items-center justify-center mx-auto w-[90%] 2xl:w-[80%]">
                    <div className="text-center md:text-left mx-auto md:mx-0">
                        <p className="headingFont text-3xl md:text-7xl xl:text-8xl mb-4">
                            Popular Shoombacon
                        </p>
                        <p className="text-white lg:w-3/4 mb-4">
                            100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun
                        </p>
                        <div className="bg-white px-2 rounded-full group cursor-pointer py-3 flex justify-between xl:w-2/5 md:w-1/2 mx-auto md:mx-0 text-black">
                            <div className="pl-2 xl:pl-7">
                                <p className="text-2xl font-semibold">
                                    $12.00
                                </p>
                                <p className="font-medium lg:text-sm">
                                    220gr / 600 cal
                                </p>
                            </div>
                            <div className="xl:w-16 xl:h-16 w-10 h-10 flex justify-center items-center text-4xl text-red-500 border-2 group-hover:bg-red-500 group-hover:text-white border-red-500 rounded-full transition-all duration-500">
                                <LuPlus />
                            </div>
                        </div>
                    </div>
                    <Image className="md:w-full w-[80%] mx-auto" src={burger3} alt="Burger 3" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex md:flex-row flex-col-reverse items-center justify-center mx-auto w-[90%] 2xl:w-[80%]">
                    <div className="text-center md:text-left mx-auto md:mx-0">
                        <p className="headingFont text-3xl md:text-7xl xl:text-8xl mb-4">
                            Best Local Tuna Burger
                        </p>
                        <p className="text-white lg:w-3/4 mb-4">
                            100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun
                        </p>
                        <div className="bg-white px-2 rounded-full group cursor-pointer py-3 flex justify-between xl:w-2/5 md:w-1/2 mx-auto md:mx-0 text-black">
                            <div className="pl-2 xl:pl-7">
                                <p className="text-2xl font-semibold">
                                    $12.00
                                </p>
                                <p className="font-medium lg:text-sm">
                                    220gr / 600 cal
                                </p>
                            </div>
                            <div className="xl:w-16 xl:h-16 w-10 h-10 flex justify-center items-center text-4xl text-red-500 border-2 group-hover:bg-red-500 group-hover:text-white border-red-500 rounded-full transition-all duration-500">
                                <LuPlus />
                            </div>
                        </div>
                    </div>
                    <Image className="md:w-full w-[80%] mx-auto" src={burger4} alt="Burger 4" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
