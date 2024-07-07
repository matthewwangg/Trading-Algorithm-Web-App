import React from 'react';
import '../styles/styles.css'

interface InfoCardProps {
    imageSrc?: string;
    headerText: string;
    paragraphText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageSrc, headerText, paragraphText }) => {
    return (
        <div className="info-card">
            {imageSrc ? (
                <img src={imageSrc} alt="Info" className="info-card-image" />
            ) : (
                <div className="info-card-placeholder"></div>
            )}
            <div className="info-card-content">
                <h2 className="info-card-header">{headerText}</h2>
                <p className="info-card-paragraph">{paragraphText}</p>
            </div>
        </div>
    );
};

export default InfoCard;

