// src/pages/DashboardClaims.js
import React from 'react';

function DashboardClaims() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Claims</h1>
      <p className="text-gray-700 mb-6">
        View and manage your insurance claims here.
      </p>
      {/* Example of claims list (mock data) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Claim #A123</h2>
        <p className="text-gray-600">Details about Claim #A123...</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Claim #B456</h2>
        <p className="text-gray-600">Details about Claim #B456...</p>
      </div>
    </div>
  );
}

export default DashboardClaims;
