import React from 'react';
import './Styles.css';

const ClaimDetailPage: React.FC = () => {
  const claim = {
    id: '123456',
    dateFiled: '2024-08-15',
    status: 'Pending',
    amount: '$500',
    description: 'Claim for recent medical expenses.',
  };

  return (
    <div className="claim-detail-page">
      <header className="claim-header">
        <h1>Claim Details</h1>
        <p>View and manage your insurance claims.</p>
      </header>
      <section className="claim-info">
        <h2>Claim ID: {claim.id}</h2>
        <p><strong>Date Filed:</strong> {claim.dateFiled}</p>
        <p><strong>Status:</strong> <span className={`status ${claim.status.toLowerCase()}`}>{claim.status}</span></p>
        <p><strong>Amount:</strong> {claim.amount}</p>
        <p><strong>Description:</strong> {claim.description}</p>
        <button className="action-button">View More Details</button>
        <button className="action-button">Take Action</button>
      </section>
    </div>
  );
};

export default ClaimDetailPage;
