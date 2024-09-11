import React, { useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { useNavigate } from 'react-router-dom';

const contractABI = [
  // ABI of the UserRegistry contract
  {
    "constant": true,
    "inputs": [
      {
        "name": "user",
        "type": "address"
      }
    ],
    "name": "userExists",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = '0xYourContractAddressOnSepolia';

const Authentication: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const handleAuthenticate = async () => {
    setLoading(true);

    try {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider as any);
        await (provider as any).request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Check if the user has an account with your service
        const userHasAccount = await contract.methods.userExists(userAccount).call();

        if (userHasAccount) {
          navigate('/dashboard'); // Redirect to the user's dashboard
        } else {
          navigate('/signup'); // Redirect to the signup page
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
    <div className="authentication-container">
      <h1>Authenticate with MetaMask</h1>
      <button
        onClick={handleAuthenticate}
        style={buttonStyle}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Authenticate'}
      </button>
    </div>
  );
};

export default Authentication;
