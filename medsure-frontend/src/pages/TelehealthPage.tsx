import React, { useState } from 'react';
import './Styles.css';

const TelehealthPage: React.FC = () => {
  const [provider, setProvider] = useState('');
  const [providers] = useState<string[]>([
    'Dr. Smith - Cardiologist',
    'Dr. Johnson - Dermatologist',
    'Dr. Lee - General Practitioner',
  ]);

  const handleBookAppointment = () => {
    if (provider) {
      alert(`Appointment booked with ${provider}`);
      setProvider('');
    }
  };

  return (
    <div className="telehealth-page">
      <header className="telehealth-header">
        <h1>Telehealth</h1>
        <p>Connect with healthcare providers remotely for consultations and follow-ups.</p>
      </header>
      <section className="telehealth-content">
        <div className="provider-selection">
          <h2>Select a Provider</h2>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="provider-select"
          >
            <option value="">Select a provider...</option>
            {providers.map((provider, index) => (
              <option key={index} value={provider}>
                {provider}
              </option>
            ))}
          </select>
          <button onClick={handleBookAppointment} className="book-button">
            Book Appointment
          </button>
        </div>
        <div className="telehealth-resources">
          <h2>Telehealth Resources</h2>
          <ul>
            <li><a href="/telehealth-guide" className="resource-link">Telehealth Guide</a></li>
            <li><a href="/insurance-info" className="resource-link">Insurance Information</a></li>
            <li><a href="/technical-support" className="resource-link">Technical Support</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TelehealthPage;
