import React, { useState } from 'react';
import './Styles.css';

const MedicationManagement: React.FC = () => {
  const [medicationName, setMedicationName] = useState('');
  const [medications, setMedications] = useState<string[]>([]);

  const handleAddMedication = () => {
    if (medicationName) {
      setMedications([...medications, medicationName]);
      setMedicationName('');
    }
  };

  return (
    <div className="medication-management">
      <header className="medication-header">
        <h1>Medication Management</h1>
        <p>Manage and track your medications effectively.</p>
      </header>
      <section className="medication-content">
        <div className="medication-form">
          <input
            type="text"
            placeholder="Enter medication name..."
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
            className="medication-input"
          />
          <button onClick={handleAddMedication} className="add-button">
            Add Medication
          </button>
        </div>
        <div className="medication-list">
          <h2>Your Medications</h2>
          <ul>
            {medications.map((medication, index) => (
              <li key={index} className="medication-item">
                {medication}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MedicationManagement;
