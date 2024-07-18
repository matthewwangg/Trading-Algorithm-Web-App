import React from 'react';
import '../styles/styles.css';

interface Stock {
    name: string;
    price: string;
}

interface StockSectionProps {
    stocks: Stock[];
}

const StockSection: React.FC<StockSectionProps> = ({ stocks }) => {
    return (
        <div className="stock-section">
            {stocks.map((stock, index) => (
                <div className="stock-detail" key={index}>
                    <div className="circle"></div>
                    <div className="detail-text">
                        <h3>{stock.name}</h3>
                        <p>{stock.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StockSection;
