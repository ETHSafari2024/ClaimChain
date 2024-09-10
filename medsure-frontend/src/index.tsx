import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import App from './App';
import './styles/common.css'; // Import global styles

// Get the root element from the HTML
const rootElement = document.getElementById('root')!;

// Create a root for rendering
const root = ReactDOM.createRoot(rootElement);

// Render the App component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
