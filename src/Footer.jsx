import React from 'react';
import { Link } from 'react-router-dom';

import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative mt-10 w-full">
      {/* Background image same as slider */}
      <img
        src={require('./img/back3.jpg')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <div className="relative z-20 px-6 py-14 max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-8 justify-between">
        {/* Contact Info */}
        <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] text-white space-y-4">
          <h4 className="text-xl font-bold tracking-wide uppercase">Get In Touch</h4>
          <div className="flex items-start gap-2">
            <FaLocationDot className="mt-1 text-white" />
            <p>123 Street, New York, USA</p>
          </div>
          <div className="flex items-start gap-2">
            <IoIosCall className="mt-1 text-white" />
            <p>+012 345 67890</p>
          </div>
          <div className="flex items-start gap-2">
            <MdEmail className="mt-1 text-white" />
            <p>info@example.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] text-white space-y-4">
          <h4 className="text-xl font-bold tracking-wide uppercase">Follow Us</h4>
          <p className="font-montserrat">
            Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
          </p>
          <div className="flex gap-3">
            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-amber-500 transition"><FaTwitter /></Link>
            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-amber-500 transition"><TiSocialFacebook /></Link>
            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-amber-500 transition"><FaLinkedinIn /></Link>
            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-amber-500 transition"><FaInstagram /></Link>
          </div>
        </div>

        {/* Open Hours */}
        <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] text-white space-y-2 font-montserrat">
          <h4 className="text-xl font-bold tracking-wide uppercase mb-2">Open Hours</h4>
          <div>
            <h6 className="uppercase font-semibold">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
          </div>
          <div>
            <h6 className="uppercase font-semibold">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[22%] text-white space-y-4">
          <h4 className="text-xl font-bold tracking-wide uppercase">Newsletter</h4>
          <p className="font-montserrat">
            Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
          </p>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded text-black outline-none"
          />
          <button className="w-full bg-amber-600 text-white p-3 rounded font-semibold hover:bg-amber-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
