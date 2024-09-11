import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Styles.css';

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <h1>Authentication</h1>
        <p>Please log in to continue.</p>
      </header>
      <section className="auth-content">
        <form className="auth-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account?</p>
          <Link to="/register" className="create-account-link">Create Account</Link>
        </div>
      </section>
      <footer className="auth-footer">
        <p>© 2024 ClaimChain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthPage;
