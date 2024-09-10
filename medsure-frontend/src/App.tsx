import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import OnboardingPage from './pages/OnboardingPage';
import Dashboard from './pages/Dashboard';
import ProviderNetwork from './pages/ProviderNetwork';
import HealthLibrary from './pages/HealthLibrary';
import MedicationManagement from './pages/MedicationManagement';
import TelehealthPage from './pages/TelehealthPage';
import InsuranceMarketplace from './pages/InsuranceMarketplace';
import ClaimDetailPage from './pages/ClaimDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/provider-network" element={<ProviderNetwork />} />
        <Route path="/health-library" element={<HealthLibrary />} />
        <Route path="/medication-management" element={<MedicationManagement />} />
        <Route path="/telehealth" element={<TelehealthPage />} />
        <Route path="/insurance-marketplace" element={<InsuranceMarketplace />} />
        <Route path="/claim-detail" element={<ClaimDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
