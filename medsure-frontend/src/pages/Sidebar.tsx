// import React from 'react';

// interface SidebarProps {
//   setCurrentPage: (page: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li onClick={() => setCurrentPage('policyDetails')}>Policy Details</li>
//         <li onClick={() => setCurrentPage('poolManagement')}>Pool Management</li>
//         <li onClick={() => setCurrentPage('claimsProcessing')}>Claims Processing</li>
//         <li onClick={() => setCurrentPage('tracking')}>Tracking</li>
//         <li onClick={() => setCurrentPage('governance')}>Governance</li>
//         <li onClick={() => setCurrentPage('security')}>Security</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/style.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/policy-details">Policy Details</Link></li>
        <li><Link to="/pool-management">Pool Management</Link></li>
        <li><Link to="/claims-processing">Claims Processing</Link></li>
        <li><Link to="/tracking">Tracking</Link></li>
        <li><Link to="/governance">Governance</Link></li>
        <li><Link to="/security">Security</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
