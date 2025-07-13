import React, { useEffect } from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingForm from './components/BookingForm';

function Reservation() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Slider />
      <Navbar />

      {/* Page Title and Breadcrumb */}
      <div className="absolute top-56 w-full flex flex-col items-center justify-center text-white z-10 px-4">
        <div className="menu-bar">
          <h1 className='text-7xl uppercase' data-aos="fade-down">Reservation</h1>
        </div>
        <div className="navbar space-x-3 text-xl mt-3">
          <Link className='text-white no-underline hover:underline' to="/">Home</Link>
          <span className='text-white'> / </span>
          <span className='no-underline text-white'>Reservation</span>
        </div>
      </div>

      {/* Reservation Section */}
      <div className="w-full my-5 px-3 flex items-center justify-center">
        <div className="relative w-full max-w-7xl h-auto min-h-[800px]">
          {/* Background Image */}
          <img
            src={require('./img/back3.jpg')}
            alt=""
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between gap-8 p-6 lg:p-12 h-full">
            
            {/* Left Text with offer */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h1 className="text-white text-5xl sm:text-6xl font-bold mb-3">30% OFF</h1>
              <h1 className="text-white text-xl sm:text-2xl mb-3">For Online Reservation</h1>
              <p className="text-white font-montserrat text-sm sm:text-base mb-5">
                Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
              </p>

              <div className="space-y-2">
                <div className="flex items-start">
                  <i className="mr-3 text-orange-500"><FaCheck /></i>
                  <h5 className="text-white">Freshly Brewed Coffee</h5>
                </div>
                <div className="flex items-start">
                  <i className="mr-3 text-orange-500"><FaCheck /></i>
                  <h5 className="text-white">Perfect Ambience</h5>
                </div>
                <div className="flex items-start">
                  <i className="mr-3 text-orange-500"><FaCheck /></i>
                  <h5 className="text-white">Quick Online Booking</h5>
                </div>
              </div>
            </div>

            {/* Right Form */}
           <BookingForm/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Reservation;
