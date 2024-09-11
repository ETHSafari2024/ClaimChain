import React, { useState } from 'react';
import styles from './Styles.module.css';

const ClaimForm: React.FC = () => {
  const [claim, setClaim] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log('Claim Submitted:', claim);
  };

  return (
    <form className={styles.claimForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Submit a Claim</h2>
      <label htmlFor="claim" className={styles.label}>
        Claim Details:
        <textarea
          id="claim"
          className={styles.textarea}
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          rows={5}
        />
      </label>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ClaimForm;
