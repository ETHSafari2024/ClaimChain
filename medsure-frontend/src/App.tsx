// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout'; // Adjust path as needed
import LandingPage from './pages/LandingPage'; // Adjust path as needed
import PolicyDetails from './pages/PolicyDetails'; // Adjust path as needed
import PoolManagement from './pages/PoolManagement'; // Adjust path as needed
import ClaimsProcessing from './pages/ClaimsProcessing'; // Adjust path as needed
import Tracking from './pages/Tracking'; // Adjust path as needed
import Governance from './pages/Governance'; // Adjust path as needed
import Security from './pages/Security'; // Adjust path as needed
import './pages/style.css'; // Import your global CSS

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/policy-details" element={<PolicyDetails />} />
          <Route path="/pool-management" element={<PoolManagement />} />
          <Route path="/claims-processing" element={<ClaimsProcessing />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
