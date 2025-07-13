import React, { useEffect } from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import Client from './Client';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Slider />
      <Navbar />

      {/* Header Section */}
      <div
        className="absolute top-56 w-full flex flex-col items-center justify-center text-white z-10 px-4 text-center"
        data-aos="fade-down"
      >
        <h1 className='text-4xl sm:text-5xl md:text-6xl uppercase font-bold'>Testimonial</h1>
        <div className="flex flex-wrap justify-center items-center gap-2 text-base sm:text-lg mt-3">
          <Link className='text-white no-underline hover:underline' to="/">Home</Link>
          <span className='text-white'> / </span>
          <span className='text-white'>Testimonial</span>
        </div>
      </div>

      {/* Client Heading */}
      <div className="w-full py-16 px-4 sm:px-8 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3B36] uppercase mb-8">Client</h2>
        <Client />
      </div>

      <Footer />
    </div>
  );
}

export default Testimonial;
