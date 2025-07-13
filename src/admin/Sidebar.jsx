import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaClipboardList, FaChartBar, FaFileExport, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 text-sm ${
      isActive(path) ? 'bg-[#1f1f1f] text-amber-400 font-medium' : 'text-white hover:bg-[#1a1a1a]'
    }`;

  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-[#111111] shadow-md p-6 z-50 flex flex-col">
      {/* Title */}
      <div className="text-lg text-white font-semibold mb-10">☕ Brew Admin</div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-3 flex-1">
        <Link to="/admin/dashboard" className={linkClass('/admin/dashboard')}>
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/admin/bookings" className={linkClass('/admin/bookings')}>
          <FaClipboardList /> Bookings
        </Link>
        <Link to="/admin/analytics" className={linkClass('/admin/analytics')}>
          <FaChartBar /> Analytics
        </Link>
        <Link to="/admin/export" className={linkClass('/admin/export')}>
          <FaFileExport /> Export
        </Link>
        <Link to="/admin/users" className={linkClass('/admin/users')}>
          <FaUsers /> Users
        </Link>
      </nav>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.removeItem('admin-auth');
          window.location.href = '/admin/login';
        }}
        className="flex items-center gap-2 px-4 py-2 text-red-500 hover:text-red-400 text-sm mt-6 transition-all"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
