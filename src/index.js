import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Main.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Home from './Home';
import Quote from './Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/App" element={<App />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
