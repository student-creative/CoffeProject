import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import BackButton from './BackButton';

const Analytics = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(data);
  }, []);

  const totalBookings = bookings.length;
  const totalGuests = bookings.reduce((sum, b) => sum + Number(b.person || 1), 0);
  const uniqueUsers = [...new Set(bookings.map(b => b.email))].length;

  const mostBookedTimes = {};
  bookings.forEach(b => {
    const time = b.time || 'Unknown';
    mostBookedTimes[time] = (mostBookedTimes[time] || 0) + 1;
  });

  const topTimes = Object.entries(mostBookedTimes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const latestBookings = bookings.slice(-5).reverse();

  return (
    <>
      <Sidebar />
      <div className="ml-64 p-6 text-white min-h-screen bg-[#1e1e1e]">
        {/* Back Button at top */}
        <BackButton to="/admin/dashboard" />

        <h2 className="text-3xl font-bold mb-6">📈 Booking Analytics</h2>

        {/* Metric Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-amber-600 to-yellow-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-1">Total Bookings</h3>
            <p className="text-3xl font-bold">{totalBookings}</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-lime-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-1">Total Guests</h3>
            <p className="text-3xl font-bold">{totalGuests}</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-500 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-1">Unique Users</h3>
            <p className="text-3xl font-bold">{uniqueUsers}</p>
          </div>
        </div>

        {/* Top Time Slots */}
        <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">⏰ Most Booked Time Slots</h3>
          {topTimes.length === 0 ? (
            <p className="text-gray-400">No data yet</p>
          ) : (
            <ul className="space-y-2">
              {topTimes.map(([time, count], i) => (
                <li
                  key={i}
                  className="flex justify-between bg-[#2a2a2a] p-3 rounded-md text-lg text-gray-200 hover:bg-[#333]"
                >
                  <span>🕒 {time}</span>
                  <span>📅 {count} Bookings</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">🕵️ Recent Bookings</h3>
          {latestBookings.length === 0 ? (
            <p className="text-gray-400">No recent bookings.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm text-left border-collapse">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="p-2">Name</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Time</th>
                    <th className="p-2">Guests</th>
                  </tr>
                </thead>
                <tbody>
                  {latestBookings.map((b, i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-[#2a2a2a]">
                      <td className="p-2">{b.name}</td>
                      <td className="p-2">{b.email}</td>
                      <td className="p-2">{b.date}</td>
                      <td className="p-2">{b.time}</td>
                      <td className="p-2">{b.person}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Analytics;
