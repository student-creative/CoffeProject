import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { FaUsers, FaCalendarCheck, FaClock, FaFireAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setBookings(storedBookings);
    setContacts(storedContacts);
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const todayBookings = bookings.filter((b) => b.date === today);

  const chartData = bookings.reduce((acc, booking) => {
    const date = booking.date;
    const found = acc.find((d) => d.date === date);
    if (found) {
      found.count += 1;
    } else {
      acc.push({ date, count: 1 });
    }
    return acc;
  }, []);

  const latestBookings = bookings.slice(-5).reverse();
  const latestContacts = contacts.slice(-5).reverse();

  return (
    <>
      <Sidebar />
      <div className="ml-64 bg-[#1e1e1e] min-h-screen p-8 text-white">
        <h2 className="text-3xl font-bold mb-8">☕ Brew Haven Admin Dashboard</h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card title="Total Bookings" value={bookings.length} icon={<FaUsers size={24} />} gradient="from-purple-500 to-pink-500" />
          <Card title="Today Bookings" value={todayBookings.length} icon={<FaCalendarCheck size={24} />} gradient="from-blue-500 to-teal-500" />
          <Card title="Guests Today" value={todayBookings.reduce((sum, b) => sum + parseInt(b.person || 0), 0)} icon={<FaClock size={24} />} gradient="from-yellow-500 to-orange-500" />
          <Card title="Hot Slot" value="7:00 PM" icon={<FaFireAlt size={24} />} gradient="from-red-500 to-pink-600" />
        </div>

        {/* Chart */}
        <div className="bg-[#2c2c2c] rounded-lg p-6 shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">📊 Bookings Per Day</h3>
          {chartData.length === 0 ? (
            <p className="text-gray-400">No chart data available</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="count" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Latest Bookings */}
        <div className="bg-[#2c2c2c] rounded-lg p-6 shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">🆕 Latest Bookings</h3>
          {latestBookings.length === 0 ? (
            <p className="text-gray-400">No bookings yet.</p>
          ) : (
            <ul className="space-y-3">
              {latestBookings.map((b, i) => (
                <li key={i} className="flex justify-between items-center border-b border-gray-600 pb-2">
                  <div>
                    <p className="font-semibold">{b.name} ({b.person} guests)</p>
                    <p className="text-sm text-gray-400">{formatDate(b.date)} at {b.time}</p>
                  </div>
                  <span className="text-amber-500 text-sm">{b.email}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Contact Messages */}
        <div className="bg-[#2c2c2c] rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">📩 Contact Messages</h3>
          {latestContacts.length === 0 ? (
            <p className="text-gray-400">No contact messages yet.</p>
          ) : (
            <ul className="space-y-3">
              {latestContacts.map((c, i) => (
                <li key={i} className="border-b border-gray-600 pb-2">
                  <p className="font-semibold">{c.name} — <span className="text-amber-500">{c.email}</span></p>
                  <p className="text-sm text-gray-300">🕒 {c.submittedAt}</p>
                  <p className="text-white mt-1">{c.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

const Card = ({ title, value, icon, gradient }) => (
  <div className={`p-4 rounded-xl shadow-lg bg-gradient-to-br ${gradient} text-white flex flex-col gap-2 hover:scale-105 transition-transform`}>
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-medium">{title}</h4>
      {icon}
    </div>
    <h2 className="text-3xl font-bold">{value}</h2>
  </div>
);

const formatDate = (dateStr) => {
  const [y, m, d] = dateStr.split("-");
  return `${d}-${m}-${y}`;
};

export default Dashboard;
