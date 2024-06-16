import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="h-auto pt-32 pb-5 mx-auto   w-full bg-red-500">
            <div className="xl:max-w-7xl px-7 max-w-3xl mx-auto">
                <h1 id="title" className="text-center text-[#F4E6C0] text-9xl">
                    Hunger
                </h1>
                <p className="text-3xl text-white font-semibold text-center py-3">
                    Stay informed about special offers
                </p>
                <p className="text-2xl text-white text-center">
                    Subscribe to the Newsleter
                </p>
                <div className="flex justify-center pt-5 relative items-center">
                    <div>

                    </div>
                    <input
                        type="email"
                        placeholder="enter your email address"
                        className="bg-white pl-7 md:w-1/2 w-3/4 py-4 rounded-full mx-auto "
                    />
                    <input value="Subscribe" type="submit" className="bg-red-600 right-[10%] md:right-[20%] absolute text-white  lg:w-[10%] md:w-[20%] w-[30%] py-4 rounded-full font-semibold mx-auto " />
                </div>

                <div className="flex pt-5 lg:px-0 px-4 gap-y-5 lg:flex-row flex-col lg:justify-between justify-center">
                    {/* Let's Get Together Section */}
                    <div className="">
                        <h2 className="text-xl font-bold mb-4">LET'S GET TOGETHER</h2>
                        <ul className="text-white">
                            <li className="flex items-center mb-2">
                                <span className="material-icons mr-2">place</span>
                                60 East 65th Street, NY
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="material-icons mr-2">access_time</span>
                                Mon - Sat: 11AM - 11PM <br />
                                Sun: 11AM - 08PM
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="material-icons mr-2">access_time</span>
                                Mon - Sat: 01PM - 10PM <br />
                                Sun: Closed
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="material-icons mr-2">phone</span>
                                1-800-700-600
                            </li>
                        </ul>
                        <div className="flex text-2xl text-white mt-4">
                            <a href="#" className="mr-4">
                                <FaFacebook />
                            </a>
                            <a href="#" className="mr-4">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* About Us Section */}
                    <div className="">
                        <h2 className="text-xl font-bold mb-4">ABOUT US</h2>
                        <ul className="text-white">
                            <li className="mb-2"><a href="#">Our Story</a></li>
                            <li className="mb-2"><a href="#">Our Team</a></li>
                            <li className="mb-2"><a href="#">Our Food</a></li>
                            <li className="mb-2"><a href="#">Health Measures</a></li>
                            <li className="mb-2"><a href="#">Job Opportunities</a></li>
                        </ul>
                    </div>

                    {/* Quick Menu Section */}
                    <div className="">
                        <h2 className="text-xl font-bold mb-4">QUICK MENU</h2>
                        <ul className="text-white">
                            <li className="mb-2"><a href="#">Beef Burgers</a></li>
                            <li className="mb-2"><a href="#">Chicken Burgers</a></li>
                            <li className="mb-2"><a href="#">Plant-Based Burgers</a></li>
                            <li className="mb-2"><a href="#">Sides</a></li>
                            <li className="mb-2"><a href="#">Drinks</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-b-2 pt-5">

                </div>
                <div className="flex lg:flex-row flex-col justify-between pt-3 items-center">
                    <p >
                        ©2024 MarkUP IT All rights reserved
                    </p>
                    <ul className="flex items-center gap-2">
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}