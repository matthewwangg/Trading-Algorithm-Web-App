import React from 'react';
import '../styles/styles.css';

interface StockGraphCardProps {
    headerText: string;
    paragraphText: string;
}

const StockGraphCard: React.FC<StockGraphCardProps> = ({ headerText, paragraphText }) => {
    return (
        <div className="stock-graph-card">
            <h2 className="stock-graph-card-header">{headerText}</h2>
            <p className="stock-graph-card-paragraph">{paragraphText}</p>
            <div className="stock-graph-placeholder">Stock Price Graph</div>
            <p className="stock-graph-card-paragraph-2">{paragraphText}</p>
        </div>
    );
};

export default StockGraphCard;
