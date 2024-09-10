import React, { useState } from 'react';
import './Styles.css';

const HealthLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="health-library">
      <header className="library-header">
        <h1>Health Library</h1>
        <p>Explore our health resources and articles.</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </header>
      <section className="library-content">
        <div className="featured-articles">
          <h2>Featured Articles</h2>
          <div className="article-item">
            <h3>The Importance of Regular Check-Ups</h3>
            <p>Regular health check-ups can help detect issues early...</p>
          </div>
          <div className="article-item">
            <h3>Healthy Eating Habits for a Balanced Life</h3>
            <p>Discover how a balanced diet can improve your overall well-being...</p>
          </div>
          <div className="article-item">
            <h3>Understanding Mental Health and Well-being</h3>
            <p>Learn about the significance of mental health and ways to maintain it...</p>
          </div>
          {/* Add more articles here */}
        </div>
        <div className="categories">
          <h2>Categories</h2>
          <ul>
            <li><a href="/articles/nutrition">Nutrition</a></li>
            <li><a href="/articles/exercise">Exercise</a></li>
            <li><a href="/articles/mental-health">Mental Health</a></li>
            <li><a href="/articles/medications">Medications</a></li>
            <li><a href="/articles/healthy-living">Healthy Living</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HealthLibrary;
