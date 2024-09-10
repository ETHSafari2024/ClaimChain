import React from 'react';
import styles from './Styles.module.css'; // Import CSS Module

const ClaimHistory: React.FC = () => {
  // Example claim data
  const claims = [
    { id: 1, details: 'Claim 1 details', status: 'Approved' },
    { id: 2, details: 'Claim 2 details', status: 'Pending' },
  ];

  return (
    <div className={styles.claimHistory}>
      <h2 className={styles.title}>Claim History</h2>
      <ul className={styles.claimList}>
        {claims.map((claim) => (
          <li key={claim.id} className={styles.claimItem}>
            <p className={styles.claimDetails}>{claim.details}</p>
            <p className={styles.claimStatus}>Status: <span className={styles[claim.status.toLowerCase()]}>{claim.status}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
