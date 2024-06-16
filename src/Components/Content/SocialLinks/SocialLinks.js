import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function SocialLinks() {
    return (
        <div className='bg-[#0D0E13] h-full md:py-32 py-20 flex items-center md:flex-row flex-col gap-5 justify-center mx-auto w-full relative'>
            <div>
                <p className="text-white  text-3xl font-bold">
                    Give us a follow
                </p>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div className="w-16 h-16 hover:bg-red-500 hover:text-white cursor-pointer bg-white text-red-700 flex justify-center items-center rounded-full text-2xl">
                    <FaFacebookF />
                </div>
                <div className="w-16 h-16 hover:bg-red-500 hover:text-white cursor-pointer bg-white text-red-700 flex justify-center items-center rounded-full text-2xl">
                    <FaTwitter />
                </div>
                <div className="w-16 h-16 hover:bg-red-500 hover:text-white cursor-pointer bg-white text-red-700 flex justify-center items-center rounded-full text-2xl">
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}
