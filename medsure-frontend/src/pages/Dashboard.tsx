import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Styles.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of your health and activities.</p>
      </header>

      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/claim-detail">Claim Details</Link></li>
          <li><Link to="/health-library">Health Library</Link></li>
          <li><Link to="/insurance-marketplace">Insurance Marketplace</Link></li>
          <li><Link to="/medication-management">Medication Management</Link></li>
          <li><Link to="/provider-network">Provider Network</Link></li>
          <li><Link to="/telehealth">Telehealth</Link></li>
        </ul>
      </nav>

      <section className="dashboard-content">
        <div className="dashboard-section">
          <h2>Health Metrics</h2>
          <div className="metrics">
            <div className="metric">
              <h3>Weight</h3>
              <p>70 kg</p>
            </div>
            <div className="metric">
              <h3>Blood Pressure</h3>
              <p>120/80 mmHg</p>
            </div>
            <div className="metric">
              <h3>Heart Rate</h3>
              <p>72 bpm</p>
            </div>
          </div>
        </div>
        <div className="dashboard-section">
          <h2>Recent Activities</h2>
          <ul className="activity-list">
            <li>Visited Dr. Smith for a check-up</li>
            <li>Completed 30 minutes of cardio exercise</li>
            <li>Refilled prescription for blood pressure medication</li>
          </ul>
        </div>
        <div className="dashboard-section">
          <h2>Quick Links</h2>
          <div className="quick-links">
            <a href="/appointments" className="link-item">Appointments</a>
            <a href="/medications" className="link-item">Medications</a>
            <a href="/insurance" className="link-item">Insurance</a>
            <a href="/settings" className="link-item">Settings</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
