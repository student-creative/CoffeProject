import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind directives should be inside this file
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Optional, can remove if unused

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance monitoring
reportWebVitals();
