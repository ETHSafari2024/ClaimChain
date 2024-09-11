// src/pages/DashboardHome.js
import React from 'react';

function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Home</h1>
      <p className="text-gray-700 mb-6">
        Welcome to your dashboard. Here you can manage your insurance policies, file claims, and adjust settings.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Recent Policies</h2>
          <p className="text-gray-600">View and manage your most recent insurance policies.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Pending Claims</h2>
          <p className="text-gray-600">Check the status of your pending insurance claims.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Notifications</h2>
          <p className="text-gray-600">Stay updated with important notifications and updates.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
