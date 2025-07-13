import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(data);
  }, []);

  const handleDelete = (index) => {
    const updated = [...bookings];
    updated.splice(index, 1);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  // ✅ Format date to dd-mm-yyyy
  const formatDate = (dateString) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-GB'); // dd/mm/yyyy
    } catch {
      return dateString; // fallback in case of invalid date
    }
  };

  return (
    <>
      <Sidebar />
      <div className="ml-64 p-6 bg-[#1e1e1e] min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-6">📋 Bookings List</h2>

        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-amber-700">
              <thead className="bg-amber-700 text-white">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Time</th>
                  <th className="p-3 border">Guests</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item, index) => (
                  <tr key={index} className="hover:bg-[#2c2c2c] border-t border-amber-700">
                    <td className="p-3 text-center">{index + 1}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{formatDate(item.date)}</td>
                    <td className="p-3">{item.time}</td>
                    <td className="p-3 text-center">{item.person}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Bookings;
