import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Styles.css';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the button click
  const handleContinue = () => {
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="onboarding-page">
      <header className="onboarding-header">
        <h1>Onboarding</h1>
        <p>Complete your profile to get started.</p>
      </header>
      <section className="onboarding-steps">
        <div className="step">
          <h2>Step 1: Personal Information</h2>
          <p>Provide your personal details to set up your profile.</p>
        </div>
        <div className="step">
          <h2>Step 2: Health History</h2>
          <p>Enter your health history for personalized recommendations.</p>
        </div>
        <div className="step">
          <h2>Step 3: Insurance Details</h2>
          <p>Add your insurance details for seamless claim processing.</p>
        </div>
        <div className="step">
          <h2>Step 4: Preferences</h2>
          <p>Set your preferences for notifications and updates.</p>
        </div>
      </section>
      <footer className="onboarding-footer">
        <button className="continue-button" onClick={handleContinue}>Continue</button>
      </footer>
    </div>
  );
};

export default OnboardingPage;
