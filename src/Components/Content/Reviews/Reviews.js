import React from 'react'
import bannerImage from '../../../../public/bannerImage.png'
import Image from 'next/image'
import man1 from '../../../../public/man1.jpg'
import man2 from '../../../../public/man2.jpg'
import man3 from '../../../../public/man3.jpg'
import man4 from '../../../../public/man1.jpg'

const testimonials = [
    {
        image: man1,
        text: "I don't remember a single mouthful I didn't enjoy!",
        author: '@casey',
    },
    {
        image: man3,
        text: "Pretty impressive! Legit taste of burgers!!!",
        author: '@mark_twin',
    },
    {
        image: man2,
        text: "Eatsy burgers are some of the most tastiest burgers I've had!",
        author: '@sarah_composer',
    },
    {
        image: man1,
        text: "Awesome service and even better burgers!",
        author: '@john_doe',
    },
];
export default function Reviews() {
    return (
        <div className="bg-red-600 mx-auto h-full relative pt-52 pb-20">
            <div className="flex relative flex-col md:text-[25vw] text-[26vw] text-center headingFont justify-center items-center">
                <h1 className="leading-[18vw] z-[10] inline">Reviews</h1>
                <div className="absolute z-[15] xl:pt-[6vw] drop-shadow-2xl">
                    <Image className="xl:w-3/4 mx-auto" src={bannerImage} alt="Banner Image" />
                </div>
            </div>

            <div className="flex flex-col  lg:w-[75%] w-full mx-auto md:pt-72 pt-20">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={` flex flex-col md:flex-row items-center justify-center mx-auto w-[90%] 2xl:w-[80%] my-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        <div className=" w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                            <Image
                                src={testimonial.image}
                                alt={`Testimonial from ${testimonial.author}`}

                                className="w-96 h-96 object-cover rounded-full"
                            />
                        </div>
                        <div className="text-container w-full md:w-1/2 text-center md:text-left px-4">
                            <p className="headingFont1 text-[#F4E6C0] text-5xl mb-2">{testimonial.text}</p>
                            <p className="text-[#F4E6C0] text-lg opacity-80">{testimonial.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
