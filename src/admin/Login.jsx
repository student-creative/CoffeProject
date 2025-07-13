import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('admin-auth', 'true');
      localStorage.setItem('admin-email', email);
      navigate('/admin/dashboard');
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="bg-[#1f1f1f] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-black border border-amber-600 text-white rounded"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-black border border-amber-600 text-white rounded"
          required
        />

        <button
          type="submit"
          className="w-full p-3 bg-amber-600 hover:bg-amber-700 rounded text-white font-bold mb-2"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded text-white"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Login;
