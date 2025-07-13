import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import BackButton from './BackButton';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const uniqueEmails = [...new Map(bookings.map(item => [item.email, item])).values()];
    setUsers(uniqueEmails);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="ml-64 p-6 text-white min-h-screen bg-[#1e1e1e]">
        <BackButton to="/admin/dashboard" />
        <h2 className="text-3xl font-bold mb-6">👥 Registered Users</h2>

        {users.length === 0 ? (
          <p className="text-gray-400">No users yet.</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user, i) => (
              <li key={i} className="bg-[#2c2c2c] p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Users;
