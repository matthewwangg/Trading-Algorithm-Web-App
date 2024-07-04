import React from 'react';
import Button from './Button';
import '../styles/styles.css';

interface SectionProps {
    headerText: string;
    middleText: string;
    buttonText: string;
}

const HeaderTextSection: React.FC<SectionProps> = ({ headerText, middleText, buttonText }) => {
    return (
        <div className="header-text-section">
            <h1 className="header-text-section">{headerText}</h1>
            <p className="header-text-section-text">{middleText}</p>
            <Button buttonText={buttonText} />
        </div>
    );
};

export default HeaderTextSection;
