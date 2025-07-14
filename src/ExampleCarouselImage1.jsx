import React from 'react';

function ExampleCarouselImage1() {
  return (
   <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-screen relative">
  <img
    src={require('./img/back1.jpg')}
    alt="Slide 1"
    className="w-full h-full object-cover"
  />
</div>

  );
}

export default ExampleCarouselImage1;
