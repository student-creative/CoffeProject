// 📁 src/components/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { FaCoffee, FaTrash } from 'react-icons/fa';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  const deleteBooking = (index) => {
    const updated = [...bookings];
    updated.splice(index, 1);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaCoffee className="text-amber-500" /> Brew Haven Admin
        </h1>
        <span className="text-sm text-gray-400">Total Bookings: {bookings.length}</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-amber-700">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No bookings found.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-amber-700 text-white uppercase text-xs">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Time</th>
                <th className="p-4 text-left">Guests</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#2a2a2a] text-white">
              {bookings.map((booking, index) => (
                <tr key={index} className="border-t border-amber-700 hover:bg-[#333] transition">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{booking.name}</td>
                  <td className="p-4">{booking.email}</td>
                  <td className="p-4">{booking.date}</td>
                  <td className="p-4">{booking.time}</td>
                  <td className="p-4">{booking.person}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteBooking(index)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Delete Booking"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
