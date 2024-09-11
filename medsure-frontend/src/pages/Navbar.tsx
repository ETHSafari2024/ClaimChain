
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/policy-details" className="navbar-link">Policy Details</Link></li>
        <li><Link to="/pool-management" className="navbar-link">Pool Management</Link></li>
        <li><Link to="/claims-processing" className="navbar-link">Claims Processing</Link></li>
        <li><Link to="/tracking" className="navbar-link">Tracking</Link></li>
        <li><Link to="/governance" className="navbar-link">Governance</Link></li>
        <li><Link to="/security" className="navbar-link">Security</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
