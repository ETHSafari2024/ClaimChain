import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuthenticate = async () => {
    setLoading(true);

    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        await (window.ethereum as any).request({ method: 'eth_requestAccounts' });
        
        // Get the connected account
        const accounts = await (window.ethereum as any).request({ method: 'eth_accounts' });
        const userAccount = accounts[0];

        // For demo purposes, assume any connected account is valid
        // In a real scenario, check against your backend or smart contract
        if (userAccount) {
          navigate('/onboarding'); // Redirect to onboarding page if authenticated
        } else {
          alert('No account connected.');
        }
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask', error);
      alert('Failed to connect to MetaMask.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authentication-page">
      <button onClick={handleAuthenticate} disabled={loading}>
        {loading ? 'Loading...' : 'Authenticate with MetaMask'}
      </button>
    </div>
  );
};

export default Authentication;
