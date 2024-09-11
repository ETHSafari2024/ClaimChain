import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import trackHealthImg from './1.png';
import manageClaimsImg from './2.jpeg';
import connectProvidersImg from './3.jpeg';
import './style.css';

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

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const handleGetStarted = async () => {
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
    <div className="landing-page">
      <header className="landing-header">
        <button
          onClick={handleGetStarted}
          style={buttonStyle}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Started'}
        </button>
        <h1>Welcome to ClaimChain</h1>
        <p>Your Health Management Platform.</p>
      </header>
      <section className="landing-content">
        <div className="feature">
          <img src={trackHealthImg} alt="Track Your Health" className="feature-img" />
          <h2>Track Your Health</h2>
          <p>Monitor your health metrics and keep track of your progress.</p>
        </div>
        <div className="feature">
          <img src={manageClaimsImg} alt="Manage Claims" className="feature-img" />
          <h2>Manage Claims</h2>
          <p>Efficiently manage and track your insurance claims.</p>
        </div>
        <div className="feature">
          <img src={connectProvidersImg} alt="Connect with Providers" className="feature-img" />
          <h2>Connect with Providers</h2>
          <p>Find and connect with healthcare providers easily.</p>
        </div>
      </section>

      <section className="benefits">
        <h2>Why Choose ClaimChain?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Comprehensive Insights</h3>
            <p>Get detailed insights into your health and wellness with our advanced analytics.</p>
          </div>
          <div className="benefit-item">
            <h3>Easy Claims Management</h3>
            <p>Simplify the process of managing insurance claims with our intuitive interface.</p>
          </div>
          <div className="benefit-item">
            <h3>Trusted Providers</h3>
            <p>Connect with a network of trusted healthcare providers and receive quality care.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-list">
          <div className="testimonial">
            <p>"ClaimChain has revolutionized the way I manage my health. The tracking tools are fantastic!"</p>
            <h4>Jane Doe</h4>
          </div>
          <div className="testimonial">
            <p>"The claims management feature saved me so much time. Highly recommended!"</p>
            <h4>John Smith</h4>
          </div>
          <div className="testimonial">
            <p>"Finding healthcare providers has never been easier. ClaimChain is a game-changer."</p>
            <h4>Emily Davis</h4>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Take Control of Your Health?</h2>
        <Link to="/auth" className="cta-button">Join Us Now</Link>
      </section>
    </div>
  );
};

export default LandingPage;
