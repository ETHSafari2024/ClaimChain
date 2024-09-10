import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Styles.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        {/* Get Started button */}
        <Link to="/onboarding" className="get-started-btn">Get Started</Link>
        
        <h1>Welcome to Medsure</h1>
        <p>Your health management platform.</p>
      </header>
      <section className="landing-content">
        <div className="feature">
          <h2>Track Your Health</h2>
          <p>Monitor your health metrics and keep track of your progress.</p>
        </div>
        <div className="feature">
          <h2>Manage Claims</h2>
          <p>Efficiently manage and track your insurance claims.</p>
        </div>
        <div className="feature">
          <h2>Connect with Providers</h2>
          <p>Find and connect with healthcare providers easily.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>© 2024 Medsure. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
