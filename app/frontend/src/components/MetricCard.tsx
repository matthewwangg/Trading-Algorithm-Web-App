import React from 'react';
import '../styles/styles.css';

interface MetricCardProps {
    greyText: string;
    headerText: string;
    paragraphText: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ greyText, headerText, paragraphText }) => {
    return (
        <div className="metric-card">
            <p className="metric-card-grey-text">{greyText}</p>
            <h2 className="metric-card-header">{headerText}</h2>
            <p className="metric-card-paragraph">{paragraphText}</p>
        </div>
    );
};

export default MetricCard;
