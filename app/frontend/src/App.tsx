import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MetricsPage from './pages/MetricsPage';
import PredictionsPage from './pages/PredictionsPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/metrics" element={<MetricsPage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
  );
};

export default App;
