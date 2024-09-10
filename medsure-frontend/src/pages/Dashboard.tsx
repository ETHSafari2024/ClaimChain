import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Styles.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ProgressBar } from 'react-bootstrap'; // ProgressBar component
import Calendar from 'react-calendar'; // Calendar component
import 'react-calendar/dist/Calendar.css'; // Calendar styles

const sampleHealthData = [
  { name: 'Jan', weight: 70, bp: 120, heartRate: 72 },
  { name: 'Feb', weight: 72, bp: 118, heartRate: 74 },
  { name: 'Mar', weight: 71, bp: 119, heartRate: 70 },
  // More data
];

const healthInsights = [
  "Your blood pressure has improved over the last month.",
  "Consider increasing your exercise to meet your health goals.",
];

const healthChallenges = [
  { title: "10,000 Steps a Day Challenge", description: "Aim to walk 10,000 steps daily for a month." },
  { title: "Healthy Eating Challenge", description: "Follow a balanced diet and track your meals." },
];

const communityFeatures = [
  { name: "Health Forum", link: "/community/forum" },
  { name: "Support Groups", link: "/community/groups" },
  { name: "Direct Messaging", link: "/community/messages" },
];

const Dashboard: React.FC = () => {
  const [notifications] = useState([
    'Upcoming appointment on Sept 15th.',
    'Medication refill reminder.',
  ]);
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of your health and activities.</p>
      </header>

      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/claim-detail">Claim Details</Link></li>
          <li><Link to="/health-library">Health Library</Link></li>
          <li><Link to="/insurance-marketplace">Insurance Marketplace</Link></li>
          <li><Link to="/medication-management">Medication Management</Link></li>
          <li><Link to="/provider-network">Provider Network</Link></li>
          <li><Link to="/telehealth">Telehealth</Link></li>
        </ul>
      </nav>

      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>

      {/* Personalized Content */}
      <section className="personalized-content">
        <div className="notifications">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
        <div className="recommended-content">
          <h2>Recommended for You</h2>
          <p>Explore content based on your health history and interests.</p>
          {/* Dynamic content based on user data */}
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="interactive-elements">
        <h2>Health Metrics</h2>
        <LineChart width={600} height={300} data={sampleHealthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          <Line type="monotone" dataKey="bp" stroke="#82ca9d" />
          <Line type="monotone" dataKey="heartRate" stroke="#ffc658" />
        </LineChart>
        
        <h2>Progress Towards Goals</h2>
        <div className="progress-bars">
          <div className="progress-bar-item">
            <h3>Exercise</h3>
            <ProgressBar now={60} label={`${60}%`} />
          </div>
          <div className="progress-bar-item">
            <h3>Medication Adherence</h3>
            <ProgressBar now={80} label={`${80}%`} />
          </div>
        </div>

        <h2>Upcoming Appointments</h2>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </section>

      {/* Additional Features */}
      <section className="additional-features">
        <h2>Health Insights</h2>
        <ul>
          {healthInsights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
        
        <h2>Health Challenges</h2>
        <ul>
          {healthChallenges.map((challenge, index) => (
            <li key={index}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </li>
          ))}
        </ul>
        
        <h2>Community Features</h2>
        <ul>
          {communityFeatures.map((feature, index) => (
            <li key={index}>
              <Link to={feature.link}>{feature.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
