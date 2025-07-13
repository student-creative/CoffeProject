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
    <div className='relative w-full md:w-full'>
      <Carousel fade className="w-full h-screen">
        <Carousel.Item>
          <div data-aos="fade-up" data-aos-delay="200">
            <ExampleCarouselImage1 />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div data-aos="zoom-in" data-aos-delay="300">
            <ExampleCarouselImage2 />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div data-aos="flip-left" data-aos-delay="400">
            <ExampleCarouselImage3 />
          </div>
        </Carousel.Item>
      </Carousel>

      <div data-aos="fade-down" data-aos-delay="500">
        <Navbar />
      </div>
    </div>
  );
}

export default Slider;
