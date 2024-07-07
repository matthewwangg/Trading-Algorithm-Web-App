// src/components/StockGraphCardContainer.tsx
import React from 'react';
import StockGraphCard from './StockGraphCard';
import '../styles/styles.css'; // Import your CSS file for styling

interface StockGraphCardProps {
    headerText: string;
    paragraphText: string;
}

const StockGraphCardSection: React.FC<StockGraphCardProps> = ({ headerText, paragraphText }) => {
    return (
        <div className="stock-graph-card-section">
            <StockGraphCard headerText={headerText} paragraphText={paragraphText} />
        </div>
    );
};

export default StockGraphCardSection;
