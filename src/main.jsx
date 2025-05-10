import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importation de BrowserRouter
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ShakiraFandom">  {/* Utilisation de BrowserRouter avec basename */}
    <App />
  </BrowserRouter>
);
