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
    <div className="overflow-x-hidden relative">
      {/* Hero Section with Slider */}
      <Slider />
      <Navbar />

      {/* Page Heading Overlay */}
      <div
        className="absolute top-40 sm:top-52 w-full flex flex-col items-center justify-center text-white z-20 px-4 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase font-bold">Testimonial</h1>
        <div className="flex flex-wrap justify-center items-center gap-2 text-base sm:text-lg mt-3">
          <Link to="/" className="text-white no-underline hover:underline">Home</Link>
          <span className="text-white">/</span>
          <span className="text-white">Testimonial</span>
        </div>
      </div>

      {/* Client Section */}
      <div className="w-full py-16 px-4 sm:px-8 md:px-20 bg-white relative z-10" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3B36] uppercase mb-10 text-center">What Our Clients Say</h2>
        <Client />
      </div>

      <Footer />
    </div>
  );
}

export default Testimonial;
