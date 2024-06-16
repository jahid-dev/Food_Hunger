
import Image from 'next/image'
import bannerImage from '../../../../public/bannerImage.png'

export default function Banner() {
    return (
        <div className=" text-6xl  flex justify-center  bg-red-600 md:min-h-dvh min-h-[40vh] pt-28">
            <div className="flex relative flex-col md:text-[25vw] text-[26vw] text-center  headingFont  justify-center items-center">
                <h1 className="leading-[18vw] z-[10] inline">
                    Delicious <br />
                    Burger
                </h1>
                <div className='absolute z-[15] xl:pt-[6vw] drop-shadow-2xl '>
                    <Image className='xl:w-3/4 mx-auto' src={bannerImage} />
                </div>
            </div>

        </div>
    )
}