import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

// ✅ Gérer la redirection automatique depuis 404.html
if (window.location.search.startsWith('?redirect=')) {
  const redirectPath = window.location.search.replace('?redirect=', '');
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ShakiraFandom">
    <App />
  </BrowserRouter>
);
