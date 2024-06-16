import React from 'react'
import burger1 from '../../../public/burger1.png'
import Image from 'next/image'
import { LuPlus } from "react-icons/lu";

export default function BestSellersCards({
    title, name, imageSrc, price, weight, calories
}) {
    return (
        <div className='bg-white  group   transition-all duration-500 hover:drop-shadow-2xl flex flex-col justify-between rounded-3xl cursor-pointer w-full h-full '>
            <div className='px-5 py-5 w-full'>
                <p className='uppercase pb-2 font-semibold'>
                    {title}
                </p>
                <h1 className='xl:text-[2vw] md:text-[3vw] text-[4.5vw]  w-3/4  hover:text-red-500 transition-all duration-500 font-bold  leading-none'>
                    {name}
                </h1>
                <div className=' transition-all duration-500'>
                    <Image src={imageSrc} />
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <p className='font-bold text-[2vw]'>
                            {price}
                        </p>
                        <p className='text-neutral-500'>
                            {weight} / {calories}
                        </p>
                    </div>
                    <div className='xl:w-20 xl:h-20 md:w-10 md:h-10  flex justify-center  items-center text-4xl text-red-500 border-2 hover:bg-red-500 hover:text-white   border-red-500 rounded-full transition-all duration-500'>
                        <LuPlus />
                    </div>
                </div>
            </div>
        </div>
    )
}
