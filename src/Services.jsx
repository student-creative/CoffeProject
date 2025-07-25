import React, { useEffect } from 'react';
import { FaTruck, FaCoffee, FaAward, FaTable } from "react-icons/fa";
import Slider from './Slider';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='max-w-screen overflow-x-hidden'>
            <Slider />
            <Navbar />
            <div
                className="absolute top-40 sm:top-56 w-full flex flex-col items-center justify-center text-white z-10 px-4"
                data-aos="fade-down"
            >
                <div className="menu-bar">
                    <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl  text-center">
                        services
                    </h1>
                </div>

                <div className="navbar mt-2 sm:mt-4 text-base sm:text-xl flex flex-wrap items-center justify-center space-x-2 text-center">
                    <Link to="/" className="text-white no-underline hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <span>Services</span>
                </div>
            </div>


            <div className="bg-amber-50 pt-5 px-4 sm:px-6 md:px-16">
                <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
                    <div className="w-full pt-24 pb-5 text-center" data-aos="fade-up">
                        <h4 className="uppercase text-lg md:text-xl font-semibold">Our Services</h4>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold">Fresh & Organic Beans</h1>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="service-item flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
                            <img className='w-40 h-40 object-cover mb-4' src={require('./img/services1.jpg')} alt="Fastest Door Delivery" />
                            <div className="text-center">
                                <h4 className='flex items-center justify-center text-lg font-medium'>
                                    <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                        <FaTruck />
                                    </i>
                                    Fastest Door Delivery
                                </h4>
                                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="service-item flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
                            <img className='w-40 h-40 object-cover mb-4' src={require('./img/services2.jpg')} alt="Fresh Coffee Beans" />
                            <div className="text-center">
                                <h4 className='flex items-center justify-center text-lg font-medium'>
                                    <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                        <FaCoffee />
                                    </i>
                                    Fresh Coffee Beans
                                </h4>
                                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="service-item flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
                            <img className='w-40 h-40 object-cover mb-4' src={require('./img/services3.jpg')} alt="Best Quality Coffee" />
                            <div className="text-center">
                                <h4 className='flex items-center justify-center text-lg font-medium'>
                                    <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                        <FaAward />
                                    </i>
                                    Best Quality Coffee
                                </h4>
                                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div
                            className="service-item flex flex-col items-center text-center min-h-[300px] px-2"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <img
                                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover mb-4 rounded-lg shadow"
                                src={require('./img/services3.jpg')}
                                alt="Online Table Booking"
                            />

                            <div className="text-center">
                                <h4 className="flex flex-col sm:flex-row items-center justify-center text-base sm:text-lg font-semibold text-gray-800">
                                    <span className="w-10 h-10 sm:w-12 sm:h-12 text-white text-xl bg-amber-500 rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                                        <FaTable />
                                    </span>
                                    Online Table Booking
                                </h4>
                                <p className="mt-2 text-sm text-gray-600 px-1 sm:px-2">
                                    Sit lorem ipsum et diam elitr est dolor sed duo...
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Services;
