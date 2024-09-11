import React, { useState } from 'react';
import './Styles.css';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="register-page">
      <header className="register-header">
        <h1>Register</h1>
        <p>Create an account to get started.</p>
      </header>
      <section className="register-content">
        <form className="register-form" onSubmit={handleRegister}>
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
          <button type="submit">Register</button>
        </form>
      </section>
      <footer className="register-footer">
        <p>© 2024 ClaimChain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RegisterPage;
