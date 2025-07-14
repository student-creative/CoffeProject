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
    <div className="relative">
      {/* Slider with Navbar on top */}
      <Slider />
      <Navbar />

      {/* Hero Text Overlay */}
      <div className="absolute top-40 sm:top-52 w-full flex flex-col items-center justify-center text-white z-20 px-4" data-aos="fade-down">
        <h1 className="text-4xl sm:text-6xl md:text-7xl uppercase tracking-wide">Reservation</h1>
        <div className="mt-3 text-sm sm:text-base md:text-lg flex items-center space-x-2">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <span className="text-white">/</span>
          <span className="text-white">Reservation</span>
        </div>
      </div>

      {/* Reservation Section */}
      <div className="w-full my-10 px-4 flex items-center justify-center">
        <div className="relative w-full max-w-7xl min-h-[700px] sm:min-h-[800px] rounded-xl overflow-hidden shadow-lg">

          {/* Background */}
          <img
            src={require('./img/back3.jpg')}
            alt="Reservation Background"
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between p-6 sm:p-10 md:p-14 h-full">

            {/* Left Offer Text */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-3">30% OFF</h1>
              <h2 className="text-white text-lg sm:text-xl mb-3">For Online Reservation</h2>
              <p className="text-white text-sm sm:text-base mb-6 leading-relaxed">
                Book your table now and enjoy fresh coffee with a perfect ambience. Valid for a limited time only!
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheck className="text-orange-500 mr-3 mt-1" />
                  <span className="text-white text-sm sm:text-base">Freshly Brewed Coffee</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-orange-500 mr-3 mt-1" />
                  <span className="text-white text-sm sm:text-base">Perfect Ambience</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-orange-500 mr-3 mt-1" />
                  <span className="text-white text-sm sm:text-base">Quick Online Booking</span>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Reservation;
