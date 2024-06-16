"use client"

import { useState } from "react";
import { MdDialpad } from "react-icons/md";
import { MdFormatAlignRight } from "react-icons/md";
import { MdDehaze } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";



export default function Navbar() {

    const [open, setOpen] = useState(false)
    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
        <nav className="bg-white z-[30] xl:py-5 py-3 xl:mx-5 xl:rounded-full fixed    xl:top-5 left-0 right-0">
            <div className="px-10 flex items-center justify-between">
                <div className="flex  items-center gap-10">
                    <div>
                        <h1 id="title" className="lg:text-5xl text-red-500    md:text-4xl text-3xl">Hunger</h1>
                    </div>
                    <div className="xl:block hidden">
                        <ul className="flex    items-center text-lg font-semibold uppercase gap-5">
                            <div className="relative cursor-pointer group ">
                                <li className="  ">Home</li>
                                <div className="w-2 h-2 mx-auto absolute  left-0 right-0  -bottom-3 transition-all duration-500 opacity-100   bg-red-500 rounded-full">
                                </div>
                            </div>
                            <div className="relative group ">
                                <li className="  cursor-pointer">About</li>
                                <div className="w-2 h-2 mx-auto absolute  left-0 right-0  group-hover:-bottom-3 transition-all duration-500 group-hover:opacity-100 -bottom-full opacity-0  bg-red-500 rounded-full">
                                </div>
                            </div>
                            <div className="relative group ">
                                <li className="  cursor-pointer">Blog</li>
                                <div className="w-2 h-2 mx-auto absolute  left-0 right-0  group-hover:-bottom-3 transition-all duration-500 group-hover:opacity-100 -bottom-full opacity-0  bg-red-500 rounded-full">
                                </div>
                            </div>
                            <div className="relative group ">
                                <li className="  cursor-pointer">Shop</li>
                                <div className="w-2 h-2 mx-auto absolute  left-0 right-0  group-hover:-bottom-3 transition-all duration-500 group-hover:opacity-100 -bottom-full opacity-0  bg-red-500 rounded-full">
                                </div>
                            </div>

                        </ul>
                    </div>
                </div>
                <div className="xl:block hidden">
                    <button className="hover:bg-red-500 transition-all duration-500 hover:text-white px-7 py-3 border-2 border-red-500 text-red-600 rounded-full uppercase font-bold">
                        View full menu
                    </button>
                </div>

                <div onClick={toggleSidebar} className="xl:hidden z-10 block text-3xl">
                    <span>
                        {open ? <RiCloseLargeFill /> : <MdFormatAlignRight />}
                    </span>
                </div>

                <div className={`xl:hidden block w-[70%] top-0  fixed  bg-white  min-h-dvh transition-all duration-500 ${open ? "right-0" : "-right-full"}`}>

                </div>
            </div>
        </nav>
    )
}