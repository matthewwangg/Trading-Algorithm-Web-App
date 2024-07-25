import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <span className="navbar-header-text">Stock Prediction Trading Engine</span>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/predictions">Predictions</Link></li>
                    <li><Link to="/metrics">Metrics</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </nav>
);
}

export default Navbar;
