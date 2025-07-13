import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Or use emoji if not using icon lib

const BackButton = ({ to = -1 }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-black font-medium rounded-md transition"
    >
      <ArrowLeft size={18} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
