import React, { useState } from 'react';
import './Styles.css';

const InsuranceMarketplace: React.FC = () => {
  const [plans] = useState([
    { id: 1, name: 'Plan A', description: 'Basic coverage with low premiums.', cost: '$100/month' },
    { id: 2, name: 'Plan B', description: 'Comprehensive coverage with high premiums.', cost: '$200/month' },
    { id: 3, name: 'Plan C', description: 'Affordable coverage with moderate premiums.', cost: '$150/month' },
  ]);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="insurance-marketplace">
      <header className="marketplace-header">
        <h1>Insurance Marketplace</h1>
        <p>Find and compare insurance plans to suit your needs.</p>
      </header>
      <section className="plans-list">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-description">{plan.description}</p>
            <p className="plan-cost">{plan.cost}</p>
            {selectedPlan === plan.id && (
              <button className="compare-button">Compare</button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default InsuranceMarketplace;
