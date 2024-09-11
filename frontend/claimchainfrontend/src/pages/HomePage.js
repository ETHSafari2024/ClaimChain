import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 min-h-screen flex flex-col justify-center items-center text-center p-8">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to ClaimChain</h1>
        <p className="text-lg mb-6 text-gray-600">
          Empowering East Africa with blockchain-based insurance solutions. 
          Easily manage your insurance policies, file claims, and access a transparent insurance system.
        </p>
        <Link to="/dashboard">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
