import React, { useState } from 'react';
import './Styles.css';

const ProviderNetwork: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="provider-network">
      <header className="provider-header">
        <h1>Provider Network</h1>
        <p>Find healthcare providers in your network.</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for providers..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </header>
      <section className="provider-list">
        <div className="provider-item">
          <h2>Dr. Alice Johnson</h2>
          <p>Cardiologist</p>
          <p>Location: New York, NY</p>
        </div>
        <div className="provider-item">
          <h2>Dr. Bob Smith</h2>
          <p>Orthopedic Surgeon</p>
          <p>Location: Los Angeles, CA</p>
        </div>
        <div className="provider-item">
          <h2>Dr. Carol Lee</h2>
          <p>Pediatrician</p>
          <p>Location: Chicago, IL</p>
        </div>
        {/* Add more provider items here */}
      </section>
    </div>
  );
};

export default ProviderNetwork;
