import React from 'react';
import Button from './Button';

interface HeaderSectionProps {
    headerText: string;
    buttonText: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ headerText, buttonText }) => {
    return (
        <div className="header-section">
            <h1 className="header-section-text">{headerText}</h1>
            <Button buttonText={"View All"}/>
        </div>
    );
};

export default HeaderSection;
