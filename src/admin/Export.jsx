import React from 'react';
import Sidebar from './Sidebar';
import { FaFileExport } from 'react-icons/fa';

const Export = () => {
  return (
    <div className="flex min-h-screen bg-[#1e1e1e] text-white">
      {/* Sidebar */}
      <div className="w-64 fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Main content with padding-left to avoid overlap */}
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FaFileExport /> Export Bookings
        </h2>

        <div className="bg-[#2c2c2c] p-6 rounded-xl shadow-lg max-w-xl">
          <h3 className="text-xl font-semibold mb-4">📤 Export to CSV</h3>
          <p className="text-gray-400 mb-4">
            You will soon be able to download all booking data as a CSV file for analysis and record keeping.
          </p>

          <button
            className="bg-amber-600 hover:bg-amber-700 transition px-6 py-3 text-white font-semibold rounded-md cursor-not-allowed"
            disabled
          >
            🚧 Export Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
