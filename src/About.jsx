import React, { useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import Slider from './Slider';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='max-w-screen overflow-x-hidden'>
      <Slider />
      <Navbar />

      {/* Hero Heading */}
      <div
        className="absolute top-36 sm:top-56 w-full flex flex-col items-center justify-center text-white z-10 px-4 text-center"
        data-aos="fade-down"
      >
        <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl font-bold">about us</h1>

        <div className="mt-2 sm:mt-4 text-sm sm:text-base flex flex-wrap items-center justify-center gap-2">
          <Link to="/" className="text-white no-underline hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link to="/menu" className="text-white no-underline hover:underline">
            About
          </Link>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-amber-50 py-10 px-4 sm:px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          {/* Top Section */}
          <div className="text-center pb-10" data-aos="fade-up">
            <h4 className="uppercase text-lg sm:text-xl md:text-2xl text-orange-300 font-bold">About Us</h4>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">Serving Since 1950</h1>
          </div>

          {/* 3 Column Main Section */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Our Story */}
            <div
              className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3"
              data-aos="fade-right"
            >
              <h1 className="text-xl sm:text-2xl font-bold mb-3">Our Story</h1>
              <h5 className="text-base sm:text-lg mb-3 font-medium">
                Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea.
              </h5>
              <p className="text-sm sm:text-base font-montserrat text-gray-700">
                Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos
                diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est
                justo sit ut. Labor diam sed ipsum et eirmod.
              </p>
              <Link
                to="/about"
                className="bg-amber-800 py-2 px-4 mt-4 text-white text-sm sm:text-lg no-underline hover:bg-amber-700 rounded-md"
              >
                Learn More
              </Link>
            </div>

            {/* Center Image */}
            <div className="flex justify-center w-full md:w-1/3" data-aos="zoom-in">
              <img
                src={require('./img/coffebar.png')}
                alt="Coffee Bar"
                className="w-full max-w-[250px] sm:max-w-[320px] md:max-w-md rounded-lg"
              />
            </div>

            {/* Our Vision */}
            <div
              className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3"
              data-aos="fade-left"
            >
              <h1 className="text-xl sm:text-2xl font-bold mb-3">Our Vision</h1>
              <p className="text-sm sm:text-base text-gray-600 font-light mb-6 font-montserrat">
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor.
              </p>

              <div className="space-y-4 w-full">
                {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map(
                  (text, index) => (
                    <div className="flex items-start gap-3" key={index}>
                      <FaCheck className="text-amber-500 mt-1" />
                      <h5 className="text-sm sm:text-lg">{text}</h5>
                    </div>
                  )
                )}
              </div>

              <div className="mt-6">
                <Link
                  to="/"
                  className="bg-orange-500 py-2 px-4 text-white text-sm sm:text-base no-underline hover:bg-orange-400 rounded-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
