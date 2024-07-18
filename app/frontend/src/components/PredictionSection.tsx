import React from 'react';
import Button from './Button';
import '../styles/styles.css';

const PredictionSection: React.FC = () => {
    return (
        <div className="prediction-section">
            <h2 className="prediction-header">Select a Stock</h2>
            <input type="text" placeholder="Enter a stock symbol" className="prediction-input" />
            <div className="button-container">
                <Button buttonText="Predict" />
            </div>
        </div>
    );
};

export default PredictionSection;
