import Image from 'next/image'
import React from 'react'
import img from '../../../../public/home_01_delivery-768x708_prev_ui.png'
import { GiHamburger } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

export default function FreeDelivery() {
  return (
    <div className='bg-[#F5E7C1] flex lg:flex-row flex-col items-center  xl:gap-32 h-auto py-32 text-red-600 mx-auto relative'>
      <div className=' xl:w-[45%] w-full'>
        <Image className='w-full' src={img} />
      </div>

      <div className='lg:mt-28 lg:px-0 px-10 '>
        <p id='title' className=' md:text-5xl text-2xl text-red-400'>
          #stayHome
        </p>
        <p className='md:text-7xl text-4xl headingFont1'>
          Free Delivery 7 <br />
          Days a week
        </p>
        <div className='mt-7 flex flex-col gap-10'>
          <div className='flex md:flex-row flex-col gap-7 items-center'>
            <div className='text-6xl   p-3 text-red-500 border  rounded-full bg-white  '>
              <GiHamburger />
            </div>
            <div className=' text-black'>
              <p className='text-xl font-semibold'>Choose Burger</p>
              <p className='text-lg md:md:w-[60%] w-full '>
                Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant.
              </p>
            </div>
          </div>
          <div className='flex  md:flex-row flex-col gap-7 items-center'>
            <div className='text-6xl p-3 text-red-500 border  rounded-full bg-white  '>
              <MdDeliveryDining />
            </div>
            <div className=' text-black'>
              <p className='text-xl font-semibold'>
                Delivery or Takeaway</p>
              <p className='text-lg md:w-[60%] w-full'>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
              </p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col gap-7 items-center'>
            <div className='text-6xl p-3 text-red-500 border  rounded-full bg-white  '>
              <GiHamburger />
            </div>
            <div className=' text-black'>
              <p className='text-xl font-semibold'>Enjoy Burger</p>
              <p className='text-lg md:w-[60%] w-full'>
                Praesent interdum mollis neque purus sed diam integer, in egestas nulla eget pede.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
