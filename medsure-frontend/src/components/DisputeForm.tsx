import React, { useState } from 'react';
import styles from './Styles.module.css'; // Import CSS Module

const DisputeForm: React.FC = () => {
  const [dispute, setDispute] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log('Dispute Submitted:', dispute);
  };

  return (
    <form className={styles.disputeForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Submit a Dispute</h2>
      <label htmlFor="dispute" className={styles.label}>
        Dispute Details:
        <textarea
          id="dispute"
          className={styles.textarea}
          value={dispute}
          onChange={(e) => setDispute(e.target.value)}
          rows={5}
        />
      </label>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default DisputeForm;
