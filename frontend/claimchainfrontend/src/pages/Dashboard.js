import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../App.css';
import axios from 'axios';
import policiesABI from '../abis/Policy.json';
import poolABI from '../abis/Insurancepool.json';

const API_BASE_URL = 'https://base-sepolia.g.alchemy.com/v2/O3AQTLzNvL51x0HThwTavNZn66SE1gsD'; // Replace with your API base URL
const POLICIES_CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your contract address
const POOL_CONTRACT_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'; // Replace with your contract address

const initialPolicies = [
  { id: 1, name: 'Basic Coverage', coverage: 'Hospitalization', premium: '$100' },
  { id: 2, name: 'Comprehensive Coverage', coverage: 'Hospitalization + Outpatient', premium: '$200' },
];

const initialFAQs = [
  { question: 'What is coverage?', answer: 'Coverage details.' },
  { question: 'How to purchase a policy?', answer: 'Purchase details.' },
];

const initialReviews = [
  { userName: 'John Doe', comment: 'Great policy!', rating: 5 },
];

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState('selectPolicy');
  const [policies, setPolicies] = useState(initialPolicies);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [amount, setAmount] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [signature, setSignature] = useState('');
  const [newPolicy, setNewPolicy] = useState({ name: '', coverage: '', premium: '' });
  const [chatMessage, setChatMessage] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');
  const [estimatedPremium, setEstimatedPremium] = useState(null);
  const [recommendedPolicies, setRecommendedPolicies] = useState(initialPolicies);
  const [faqs, setFaqs] = useState(initialFAQs);
  const [review, setReview] = useState('');
  const [policyReviews, setPolicyReviews] = useState(initialReviews);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);
  const [userClaims, setUserClaims] = useState([]);
  const [trackClaims, setTrackClaims] = useState([]);
  const [govVotes, setGovVotes] = useState([]);

  const web3 = new Web3(new Web3.providers.HttpProvider(API_BASE_URL));
  const policiesContract = new web3.eth.Contract(policiesABI, POLICIES_CONTRACT_ADDRESS);
  const poolContract = new web3.eth.Contract(poolABI, POOL_CONTRACT_ADDRESS);

  const handleSelectPolicy = (policy) => {
    setSelectedPolicy(policy);
    setSelectedView('policyDetails');
  };

  const handleViewDetails = (policy) => {
    setSelectedPolicy(policy);
    setSelectedView('policyDetails');
  };

  const handlePurchasePolicy = (policyId) => {
    // Purchase logic here
  };

  const handleRegisterPolicy = async () => {
    try {
      await policiesContract.methods.addPolicy(newPolicy.name, newPolicy.coverage, newPolicy.premium).send({ from: web3.eth.defaultAccount });
      setPolicies([...policies, { ...newPolicy, id: policies.length + 1 }]);
      setNewPolicy({ name: '', coverage: '', premium: '' });
    } catch (error) {
      console.error('Error registering policy:', error);
    }
  };

  const handleSendMessage = () => {
    // Handle sending chat message
    console.log('Message sent:', chatMessage);
    setChatMessage('');
  };

  const handleCalculatePremium = () => {
    // Simple calculation for demonstration purposes
    const premium = coverageAmount * 0.1; // Example calculation
    setEstimatedPremium(premium);
  };

  const handleSubmitReview = () => {
    // Handle review submission
    setPolicyReviews([...policyReviews, { userName: 'Anonymous', comment: review, rating: 5 }]);
    setReview('');
  };

  const toggleFaq = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  useEffect(() => {
    // Fetch data or perform other side effects
    const fetchClaims = async () => {
      try {
        // Replace with your claims fetching logic
        const claimsData = await axios.get('/api/claims');
        setUserClaims(claimsData.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchClaims();
  }, []);

  return (
    <div>
      <Sidebar />
      <Header />

      <main className="p-6">
        {selectedView === 'selectPolicy' && (
          <section className="policy-selection">
            <h2 className="text-2xl font-semibold mb-4">Select Insurance Policy</h2>

            {/* Policy Comparison Feature */}
            <div className="policy-comparison mb-8">
              <h3 className="text-xl font-semibold mb-4">Compare Insurance Policies</h3>
              <div className="policy-comparison-table bg-white p-6 rounded-lg shadow-lg">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Policy</th>
                      <th>Coverage</th>
                      <th>Premium</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policies.map((policy) => (
                      <tr key={policy.id}>
                        <td>{policy.name}</td>
                        <td>{policy.coverage}</td>
                        <td>{policy.premium}</td>
                        <td><button onClick={() => handleViewDetails(policy)} className="text-blue-500">View</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Policy List */}
            <div className="policy-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policies.map((policy) => (
                <div key={policy.id} className="policy-card bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => handleSelectPolicy(policy)}>
                  <h3 className="text-xl font-semibold">{policy.name}</h3>
                  <p>Coverage: {policy.coverage}</p>
                  <p>Premium: {policy.premium}</p>
                </div>
              ))}
            </div>

            {/* Chat Support */}
            <div className="chat-support mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Chat with Our Support Team</h3>
              <div className="chat-box h-60 overflow-auto mb-2">
                {/* Replace with dynamic chat messages */}
                <div className="message">Welcome to our support chat!</div>
              </div>
              <textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message here..."
                className="border p-2 rounded mb-2 w-full"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded w-full"
              >
                Send
              </button>
            </div>

            {/* Policy Recommendations */}
            <div className="policy-recommendations mt-8">
              <h3 className="text-xl font-semibold mb-4">Recommended Policies for You</h3>
              <div className="recommendations-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedPolicies.map((policy) => (
                  <div key={policy.id} className="policy-card bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={() => handleSelectPolicy(policy)}>
                    <h3 className="text-xl font-semibold">{policy.name}</h3>
                    <p>Coverage: {policy.coverage}</p>
                    <p>Premium: {policy.premium}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item mb-4">
                  <h4 className="font-semibold">{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="interactive-faq mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interactive FAQ</h3>
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="text-blue-500"
                  >
                    {faq.question}
                  </button>
                  {expandedFaqIndex === index && (
                    <p className="mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedView === 'policyDetails' && selectedPolicy && (
          <section className="policy-details">
            <h2 className="text-2xl font-semibold mb-4">Policy Details</h2>
            <div className="policy-detail-card bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{selectedPolicy.name}</h3>
              <p>Coverage: {selectedPolicy.coverage}</p>
              <p>Premium: {selectedPolicy.premium}</p>

              {/* Policy Purchase Form */}
              <div className="policy-purchase-form mt-4">
                <h4 className="text-lg font-semibold mb-2">Purchase Policy</h4>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="border p-2 rounded mb-2 w-full"
                />
                <label className="block mb-2">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mr-2"
                  />
                  I accept the terms and conditions
                </label>
                <button
                  onClick={() => handlePurchasePolicy(selectedPolicy.id)}
                  disabled={!termsAccepted}
                  className="bg-blue-500 text-white p-2 rounded w-full"
                >
                  Purchase
                </button>
              </div>
            </div>
          </section>
        )}

        {selectedView === 'registerPolicy' && (
          <section className="register-policy">
            <h2 className="text-2xl font-semibold mb-4">Register New Policy</h2>
            <div className="register-policy-form bg-white p-6 rounded-lg shadow-lg">
              <input
                type="text"
                value={newPolicy.name}
                onChange={(e) => setNewPolicy({ ...newPolicy, name: e.target.value })}
                placeholder="Policy Name"
                className="border p-2 rounded mb-2 w-full"
              />
              <input
                type="text"
                value={newPolicy.coverage}
                onChange={(e) => setNewPolicy({ ...newPolicy, coverage: e.target.value })}
                placeholder="Coverage Details"
                className="border p-2 rounded mb-2 w-full"
              />
              <input
                type="text"
                value={newPolicy.premium}
                onChange={(e) => setNewPolicy({ ...newPolicy, premium: e.target.value })}
                placeholder="Premium"
                className="border p-2 rounded mb-2 w-full"
              />
              <button
                onClick={handleRegisterPolicy}
                className="bg-green-500 text-white p-2 rounded w-full"
              >
                Register Policy
              </button>
            </div>
          </section>
        )}

        {selectedView === 'claims' && (
          <section className="claims">
            <h2 className="text-2xl font-semibold mb-4">Your Claims</h2>
            <div className="claims-list bg-white p-6 rounded-lg shadow-lg">
              {/* Claims list implementation */}
              {userClaims.map((claim) => (
                <div key={claim.id} className="claim-item mb-4">
                  <h4 className="text-lg font-semibold">Claim #{claim.id}</h4>
                  <p>Status: {claim.status}</p>
                  <p>Description: {claim.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedView === 'trackClaims' && (
          <section className="track-claims">
            <h2 className="text-2xl font-semibold mb-4">Track Your Claims</h2>
            <div className="track-claims-list bg-white p-6 rounded-lg shadow-lg">
              {/* Track claims list implementation */}
              {trackClaims.map((claim) => (
                <div key={claim.id} className="track-claim-item mb-4">
                  <h4 className="text-lg font-semibold">Claim #{claim.id}</h4>
                  <p>Status: {claim.status}</p>
                  <p>Description: {claim.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedView === 'govVotes' && (
          <section className="gov-votes">
            <h2 className="text-2xl font-semibold mb-4">Government Votes</h2>
            <div className="gov-votes-list bg-white p-6 rounded-lg shadow-lg">
              {/* Government votes list implementation */}
              {govVotes.map((vote) => (
                <div key={vote.id} className="gov-vote-item mb-4">
                  <h4 className="text-lg font-semibold">Vote #{vote.id}</h4>
                  <p>Details: {vote.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
