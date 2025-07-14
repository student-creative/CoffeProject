import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './ExampleCarouselImage1';
import ExampleCarouselImage2 from './ExampleCarouselImage2';
import ExampleCarouselImage3 from './ExampleCarouselImage3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navbar on top of slider */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Carousel with responsive height */}
      <Carousel fade className="w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-screen">
        <Carousel.Item>
          <div data-aos="fade-up" data-aos-delay="200" className="w-full h-full">
            <ExampleCarouselImage1 />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div data-aos="zoom-in" data-aos-delay="300" className="w-full h-full">
            <ExampleCarouselImage2 />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div data-aos="flip-left" data-aos-delay="400" className="w-full h-full">
            <ExampleCarouselImage3 />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
