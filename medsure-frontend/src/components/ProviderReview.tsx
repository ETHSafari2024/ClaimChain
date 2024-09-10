import React, { useState } from 'react';
import styles from './Styles.module.css'; // Import CSS Module

const ProviderReview: React.FC = () => {
  const [review, setReview] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle review submission
    console.log('Provider Review Submitted:', review);
    // Optionally, clear the form after submission
    setReview('');
  };

  return (
    <form className={styles.providerReview} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Provider Review</h2>
      <label htmlFor="review" className={styles.label}>
        Review Details:
        <textarea
          id="review"
          className={styles.textarea}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={6}
          placeholder="Write your review here..."
        />
      </label>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ProviderReview;
