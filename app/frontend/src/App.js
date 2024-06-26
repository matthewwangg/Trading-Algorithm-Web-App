import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VisualizationPage from './pages/VisualizationPage';
import TradingStrategyPage from './pages/TradingStrategyPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visualization" element={<VisualizationPage />} />
          <Route path="/trading-strategy" element={<TradingStrategyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
  );
};

export default App;
