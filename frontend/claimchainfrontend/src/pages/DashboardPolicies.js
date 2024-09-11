// src/pages/DashboardPolicies.js
import React from 'react';

function DashboardPolicies() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Policies</h1>
      <p className="text-gray-700 mb-6">
        Here you can view and manage all of your insurance policies.
      </p>
      {/* Example of policy list (mock data) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Policy #12345</h2>
        <p className="text-gray-600">Details about Policy #12345...</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Policy #67890</h2>
        <p className="text-gray-600">Details about Policy #67890...</p>
      </div>
    </div>
  );
}

export default DashboardPolicies;
