import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import LandingPage from './pages/LandingPage';
import PolicyDetails from './pages/PolicyDetails';
import PoolManagement from './pages/PoolManagement';
import ClaimsProcessing from './pages/ClaimsProcessing';
import Tracking from './pages/Tracking';
import Governance from './pages/Governance';
import Security from './pages/Security';
import './pages/Styles.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/policy-details" element={<PolicyDetails />} />
            <Route path="/pool-management" element={<PoolManagement />} />
            <Route path="/claims-processing" element={<ClaimsProcessing />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
