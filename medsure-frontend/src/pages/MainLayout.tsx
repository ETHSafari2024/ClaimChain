import React from 'react';
import Navbar from './Navbar'; // Adjust path as needed
import './style.css'; // Import your global CSS file

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="header">
        <h1>ClaimChain</h1> {/* Replace with your header content */}
      </header>
      <Navbar /> {/* Include the Navbar here */}
      <main className="main-content">
        {children} {/* Render the children components (e.g., page content) */}
      </main>
      {/* <footer className="footer">
        <p>© 2024 ClaimChain. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default MainLayout;
