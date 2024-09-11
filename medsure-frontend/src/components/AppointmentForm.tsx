import React, { useState } from 'react';
import styles from './Styles.module.css'; // Import CSS Module

const AppointmentForm: React.FC = () => {
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle appointment form submission
    console.log('Appointment Scheduled:', appointment);
    // Optionally, clear the form after submission
    setAppointment({ date: '', time: '' });
  };

  return (
    <form className={styles.appointmentForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Schedule an Appointment</h2>
      <div className={styles.formGroup}>
        <label htmlFor="date" className={styles.label}>
          Date:
          <input
            type="date"
            id="date"
            className={styles.input}
            value={appointment.date}
            onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="time" className={styles.label}>
          Time:
          <input
            type="time"
            id="time"
            className={styles.input}
            value={appointment.time}
            onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
          />
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>Schedule</button>
    </form>
  );
};

export default AppointmentForm;
