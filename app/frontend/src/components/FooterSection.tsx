import React from 'react';
import '../styles/styles.css';

const FooterSection: React.FC = () => {
    return (
        <div className="footer-section">
            <ul className="footer-links">
                <li><a href="#predictions">2024 Predictions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
            </ul>
        </div>
    );
};

export default FooterSection;
