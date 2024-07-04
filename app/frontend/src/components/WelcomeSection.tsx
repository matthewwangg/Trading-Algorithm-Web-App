import React from 'react';
import '../styles/styles.css';

const WelcomeSection: React.FC = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-content">
                <h1>Stock Predictions</h1>
                <p>Get insights and predictions on stock performance to make informed investment decisions.</p>
                <button className="get-started-button">Get Started</button>
            </div>
            <div className="welcome-image-placeholder"></div>
        </div>
    );
};

export default WelcomeSection;
