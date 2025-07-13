import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegCalendarAlt } from 'react-icons/fa'; // white calendar icon

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    hour: '',
    minute: '',
    ampm: '',
    person: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedTime = `${formData.hour}:${formData.minute} ${formData.ampm}`;
    const finalData = {
      ...formData,
      time: formattedTime,
    };

    console.log('📤 Booking Form Submitted:', finalData);
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(finalData);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    emailjs.send('service_bs8g7wt', 'template_isqid0q', finalData, 'UgUKGHQJciMLNhl07')
      .then((res) => {
        console.log('✅ Email sent!', res.status, res.text);
        toast.success('🎉 Booking successful! Confirmation email sent.');
        setFormData({
          name: '',
          email: '',
          date: '',
          hour: '',
          minute: '',
          ampm: '',
          person: '',
        });
      })
      .catch((err) => {
        console.error('❌ Email send failed:', err);
        toast.error('❌ Failed to send email. Please try again.');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-white mb-6 text-center text-2xl md:text-3xl font-bold">Book Your Table</h1>

        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full bg-[#1f1f1f] border border-amber-700 p-3 text-white placeholder-white"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full bg-[#1f1f1f] border border-amber-700 p-3 text-white placeholder-white"
          />

          {/* 📅 Date Picker with white calendar icon */}
          <div className="relative">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]} // disable past dates
              className="w-full bg-[#1f1f1f] border border-amber-700 p-3 pr-10 text-white placeholder-white cursor-pointer"
            />
            <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg pointer-events-none" />
          </div>

          {/* 🕒 Time Selection */}
          <div className="flex gap-2">
            <select
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              className="w-1/3 bg-[#1f1f1f] border border-amber-700 p-3 text-white"
              required
            >
              <option value="">HH</option>
              {[...Array(12)].map((_, i) => {
                const hour = i + 1;
                return <option key={hour} value={hour}>{hour}</option>;
              })}
            </select>

            <select
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              className="w-1/3 bg-[#1f1f1f] border border-amber-700 p-3 text-white"
              required
            >
              <option value="">MM</option>
              {['00', '15', '30', '45'].map(min => (
                <option key={min} value={min}>{min}</option>
              ))}
            </select>

            <select
              name="ampm"
              value={formData.ampm}
              onChange={handleChange}
              className="w-1/3 bg-[#1f1f1f] border border-amber-700 p-3 text-white"
              required
            >
              <option value="">AM/PM</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <input
            type="number"
            name="person"
            value={formData.person}
            onChange={handleChange}
            placeholder="Person"
            required
            min="1"
            className="w-full bg-[#1f1f1f] border border-amber-700 p-3 text-white placeholder-white"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-amber-600 p-4 text-center rounded-md hover:bg-amber-700 transition text-white text-xl font-semibold"
        >
          Book Now
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default BookingForm;
