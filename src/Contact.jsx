import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const newContact = {
      ...formData,
      submittedAt: new Date().toLocaleString(),
    };

    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    toast.success('✅ Message sent successfully!');

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative overflow-x-hidden">
      <Slider />
      <Navbar />

      {/* Hero Heading */}
      <div
        className="absolute top-40 sm:top-56 w-full flex flex-col items-center justify-center text-white z-20 px-4"
        data-aos="fade-down"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase font-bold">Contact</h1>
        <div className="flex flex-wrap justify-center items-center gap-2 text-base sm:text-lg mt-3">
          <Link to="/" className="text-white no-underline hover:underline">Home</Link>
          <span className="text-white">/</span>
          <span className="text-white">Contact</span>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-white" data-aos="zoom-in-up">
        <div className="max-w-4xl mx-auto bg-gray-100 shadow-2xl rounded-lg p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Get in Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
      <Footer />
    </div>
  );
}

export default Contact;
