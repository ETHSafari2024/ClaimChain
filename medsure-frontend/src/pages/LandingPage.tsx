import React from 'react';
import { Link } from 'react-router-dom';
import trackHealthImg from './1.png';
import manageClaimsImg from './2.jpeg';
import connectProvidersImg from './3.jpeg';
import './style.css'; 


const LandingPage: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <Link to="/auth" style={buttonStyle}>Get Started</Link>
        <h1>Welcome to Medsure</h1>
        <p>Your Health Management Platform.</p>
      </header>
      <section className="landing-content">
        <div className="feature">
          <img src={trackHealthImg} alt="Track Your Health" className="feature-img" />
          <h2>Track Your Health</h2>
          <p>Monitor your health metrics and keep track of your progress.</p>
        </div>
        <div className="feature">
          <img src={manageClaimsImg} alt="Manage Claims" className="feature-img" />
          <h2>Manage Claims</h2>
          <p>Efficiently manage and track your insurance claims.</p>
        </div>
        <div className="feature">
          <img src={connectProvidersImg} alt="Connect with Providers" className="feature-img" />
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
