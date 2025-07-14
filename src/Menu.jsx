import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar' // ✅ Corrected this line
import { Link } from 'react-router-dom';
import Price from './Price';
import Footer from './Footer';

function Menu() {
  
  return (
    <div>
      <Slider />
      <Navbar />

    <div className="absolute top-40 sm:top-56 w-full flex flex-col items-center justify-center text-white z-10 px-4">
  <div className="menu-bar">
    <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl  text-center">menu</h1>
  </div>

  <div className="navbar mt-2 sm:mt-4 text-base sm:text-xl flex flex-wrap items-center justify-center space-x-2 text-center">
    <Link to="/" className="text-white no-underline hover:underline">
      Home
    </Link>
    <span>/</span>
    <span>Menu</span>
  </div>
</div>

      <Price />
      <Footer />
    </div>
  )
}

export default Menu;
