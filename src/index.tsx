import { inject } from '@vercel/analytics';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AppProvider from './context/appProvider';
import './i18n';
import './index.css';

inject();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);