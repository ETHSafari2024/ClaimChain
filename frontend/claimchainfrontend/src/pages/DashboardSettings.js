// src/pages/DashboardSettings.js
import React from 'react';

function DashboardSettings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p className="text-gray-700 mb-6">
        Customize your dashboard settings and personal information here.
      </p>
      {/* Example of settings form */}
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default DashboardSettings;
