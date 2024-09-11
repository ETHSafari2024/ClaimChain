import React from 'react';
import styles from './Styles.module.css'; // Import CSS Module

interface SummaryCardProps {
  title: string;
  content: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, content }) => {
  return (
    <div className="summary-card">
      <h3 className="summary-card-title">{title}</h3>
      <p className="summary-card-content">{content}</p>
    </div>
  );
};

export default SummaryCard;
