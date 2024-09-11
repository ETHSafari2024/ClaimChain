import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical, faCalendarAlt, faWallet, faComments, faShieldAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Sidebar = ({ onNavigate }) => {
  // Check if onNavigate is a function
  if (typeof onNavigate !== 'function') {
    console.error('onNavigate is not a function');
    return null; // Prevent rendering if onNavigate is not a function
  }

  return (
    <nav className="sidebar bg-gray-800 text-white w-64">
         <div class="sidebar-header">
    <h2>ClaimChain</h2>
  </div>
      <ul className="p-4">
        <li className="mb-4 cursor-pointer flex items-center" onClick={() => onNavigate('selectPolicy')}>
          <FontAwesomeIcon icon={faFileMedical} className="mr-2" /> <span>Home</span>
        </li>
        <li className="mb-4 cursor-pointer flex items-center" onClick={() => onNavigate('dashboardHome')}>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> <span>Dashboard Home</span>
        </li>
        <li className="mb-4 cursor-pointer flex items-center" onClick={() => onNavigate('dashboardPolicies')}>
          <FontAwesomeIcon icon={faWallet} className="mr-2" /> <span>Policies</span>
        </li>
        <li className="mb-4 cursor-pointer flex items-center" onClick={() => onNavigate('dashboardClaims')}>
          <FontAwesomeIcon icon={faComments} className="mr-2" /> <span>Claims</span>
        </li>
        <li className="mb-4 cursor-pointer flex items-center" onClick={() => onNavigate('dashboardSettings')}>
          <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> <span>Settings</span>
        </li>
        <li className="cursor-pointer flex items-center" onClick={() => onNavigate('policyPage')}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> <span>Policy Page</span>
        </li>
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  onNavigate: PropTypes.func.isRequired, // Validate that onNavigate is a required function
};

export default Sidebar;
