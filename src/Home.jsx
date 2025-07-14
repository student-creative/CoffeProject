import React, { useEffect } from 'react';
import { FaCheck, FaTruck, FaCoffee, FaAward, FaTable } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './ExampleCarouselImage1';
import ExampleCarouselImage2 from './ExampleCarouselImage2';
import ExampleCarouselImage3 from './ExampleCarouselImage3';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import service1 from './img/services1.jpg';
import service2 from './img/services2.jpg';
import service3 from './img/services3.jpg';
import back3 from './img/back3.jpg';
import person1 from './img/person.jpg';
import person2 from './img/person2.jpg';
import person3 from './img/person3.jpg';
import BookingForm from './components/BookingForm';

// ... imports remain the same

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="main relative w-full h-[400px] sm:h-screen overflow-hidden">
        <Carousel fade className="w-full h-full">
          <Carousel.Item>
            <ExampleCarouselImage1 />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage2 />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage3 />
          </Carousel.Item>
        </Carousel>

        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 w-full z-20 flex flex-col items-center justify-center text-white px-4 text-center space-y-2 sm:space-y-4">
          <h2 className="capitalize text-yellow-600 text-sm sm:text-base md:text-xl">
            We have been serving
          </h2>
          <h1 className="uppercase text-[28px] sm:text-4xl md:text-6xl lg:text-[170px]  font-semibold leading-tight tracking-wide max-w-md sm:max-w-none">
            COFFE
          </h1>
          <h2 className="text-xs sm:text-sm md:text-lg tracking-wider">* SINCE 1950 *</h2>
        </div>
      </div>

      {/* The rest of the file remains unchanged... */}


      <div className="bg-amber-50 pt-5 px-4 sm:px-6 md:px-16" data-aos="fade-up">
        <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="w-full pt-24 pb-5 text-center">
            <h4 className="uppercase text-lg md:text-xl font-semibold">Our Services</h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold">Fresh & Organic Beans</h1>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-item flex flex-col items-center text-center">
              <img className='w-40 h-40 object-cover mb-4' src={service1} alt="Fastest Door Delivery" />
              <div className="text-center">
                <h4 className='flex items-center justify-center text-lg font-medium'>
                  <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'><FaTruck /></i>
                  Fastest Door Delivery
                </h4>
                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
              </div>
            </div>

            <div className="service-item flex flex-col items-center text-center">
              <img className='w-40 h-40 object-cover mb-4' src={service2} alt="Fresh Coffee Beans" />
              <div className="text-center">
                <h4 className='flex items-center justify-center text-lg font-medium'>
                  <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'><FaCoffee /></i>
                  Fresh Coffee Beans
                </h4>
                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
              </div>
            </div>

            <div className="service-item flex flex-col items-center text-center">
              <img className='w-40 h-40 object-cover mb-4' src={service3} alt="Best Quality Coffee" />
              <div className="text-center">
                <h4 className='flex items-center justify-center text-lg font-medium'>
                  <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'><FaAward /></i>
                  Best Quality Coffee
                </h4>
                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
              </div>
            </div>

            <div className="service-item flex flex-col items-center text-center">
              <img className='w-40 h-40 object-cover mb-4' src={service3} alt="Online Table Booking" />
              <div className="text-center">
                <h4 className='flex items-center justify-center text-lg font-medium'>
                  <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'><FaTable /></i>
                  Online Table Booking
                </h4>
                <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative my-5 w-full" data-aos="zoom-in">
        <img src={back3} alt="Background" className="w-full h-[520px] md:h-[520px] object-cover opacity-90" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-3 drop-shadow-lg">50% OFF</h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-3 drop-shadow-lg">Sunday Special Offer</h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-4xl drop-shadow-lg">Only for Sunday from 1st Jan to 30th Jan 2045</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl">
            <input type="email" placeholder="Your Email" className="w-full sm:flex-1 px-4 py-3 rounded text-gray-900 font-montserrat" />
            <button type="submit" className="w-full sm:w-auto bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700 transition">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="w-full my-5 px-3 flex items-center justify-center" data-aos="fade-up">
        <div className="relative w-full max-w-7xl h-auto min-h-[800px]">
          <img src={back3} alt="" className="w-full h-full object-cover absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between gap-8 p-6 lg:p-12 h-full">
            <div className="w-full lg:w-1/2 bg-opacity-80">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-2">30% OFF</h1>
              <h1 className="text-white text-xl sm:text-2xl mb-3">For Online Reservation</h1>
              <p className="text-white font-montserrat text-sm sm:text-base mb-4">Lorem justo clita erat lorem labore ea...</p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <i className="mr-3 text-orange-500"><FaCheck /></i>
                  <h5 className="text-white">Lorem ipsum dolor sit amet</h5>
                </div>
                <div className="flex items-start">
                  <i className="mr-3 text-orange-500"><FaCheck /></i>
                  <h5 className="text-white">Lorem ipsum dolor sit amet</h5>
                </div>
                <div className="flex items-start">
                  <i className="mr-3 text-orange-500"><FaCheck /></i>
                  <h5 className="text-white">Lorem ipsum dolor sit amet</h5>
                </div>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>

      <div className="client py-5 px-3" data-aos="fade-up">
        <div className="mx-5 px-3 max-w-screen-xl mx-auto">
          <div className="pt-14 pb-5">
            <h4 className="text-center text-orange-400 text-xl sm:text-2xl md:text-3xl tracking-widest mb-2">Testimonial</h4>
            <h1 className="text-center text-3xl sm:text-5xl md:text-7xl font-bold">Our Clients Say</h1>
          </div>
          <div className="person flex flex-wrap justify-center gap-8">
            <div className="item1 flex flex-col sm:flex-row items-center sm:items-start max-w-md sm:max-w-lg lg:max-w-xl">
              <img className="w-20 h-20 rounded-full object-cover" src={person1} alt="Client 1" />
              <div className="heading sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
                <h4 className="font-semibold text-lg">Client Name</h4>
                <i className="text-sm text-gray-500">Profession</i>
                <p className="mt-2 font-montserrat text-sm sm:text-base text-gray-700 max-w-sm">Sed ea amet kasd elitr stet...</p>
              </div>
            </div>
            <div className="item1 flex flex-col sm:flex-row items-center sm:items-start max-w-md sm:max-w-lg lg:max-w-xl">
              <img className="w-20 h-20 rounded-full object-cover" src={person2} alt="Client 2" />
              <div className="heading sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
                <h4 className="font-semibold text-lg">Client Name</h4>
                <i className="text-sm text-gray-500">Profession</i>
                <p className="mt-2 font-montserrat text-sm sm:text-base text-gray-700 max-w-sm">Sed ea amet kasd elitr stet...</p>
              </div>
            </div>
            <div className="item1 flex flex-col sm:flex-row items-center sm:items-start max-w-md sm:max-w-lg lg:max-w-xl">
              <img className="w-20 h-20 rounded-full object-cover" src={person3} alt="Client 3" />
              <div className="heading sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
                <h4 className="font-semibold text-lg">Client Name</h4>
                <i className="text-sm text-gray-500">Profession</i>
                <p className="mt-2 font-montserrat text-sm sm:text-base text-gray-700 max-w-sm">Sed ea amet kasd elitr stet...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
