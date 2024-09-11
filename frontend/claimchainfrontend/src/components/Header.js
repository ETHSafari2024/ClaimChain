import React, { useState } from 'react';
import image from '../logo.svg'; // Replace with the correct path to your image

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const userName = 'John Doe'; // Define your username here

  return (
    <header className="flex items-center justify-between mb-6">
      <h2 className="text-2xl mb-4">Welcome!!</h2>
      <div className="relative">
        <button className="flex items-center space-x-2" onClick={toggleProfileMenu}>
          <img src={image} alt="User Avatar" className="w-10 h-10 rounded-full border border-gray-300" />
          <span className="font-semibold">{userName}</span>
        </button>
        {isProfileMenuOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48">
            <ul className="py-2">
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Profile</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Profile</a></li>
              <li><a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
