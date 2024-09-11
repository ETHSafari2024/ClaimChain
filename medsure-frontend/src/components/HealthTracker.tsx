import React, { useState } from 'react';
import styles from './Styles.module.css'; // Import CSS Module

const HealthTracker: React.FC = () => {
  const [healthData, setHealthData] = useState({
    steps: 0,
    calories: 0,
  });

  const updateHealthData = () => {
    // Example function to simulate updating health data
    setHealthData({
      steps: healthData.steps + Math.floor(Math.random() * 100),
      calories: healthData.calories + Math.floor(Math.random() * 50),
    });
  };

  return (
    <div className={styles.healthTracker}>
      <h2 className={styles.title}>Health Tracker</h2>
      <div className={styles.dataContainer}>
        <p className={styles.data}>Steps: <span className={styles.value}>{healthData.steps}</span></p>
        <p className={styles.data}>Calories Burned: <span className={styles.value}>{healthData.calories}</span></p>
        <button className={styles.updateButton} onClick={updateHealthData}>Update Data</button>
      </div>
    </div>
  );
};

export default HealthTracker;
