import React from 'react';
import InfoCard from './InfoCard';
import '../styles/styles.css';

interface InfoCardProps {
    imageSrc?: string;
    headerText: string;
    paragraphText: string;
}

interface InfoCardSectionProps {
    firstCard: InfoCardProps;
    secondCard: InfoCardProps;
}

const InfoCardSection: React.FC<InfoCardSectionProps> = ({ firstCard, secondCard }) => {
    return (
        <div className="info-card-section">
            <InfoCard
                imageSrc={firstCard.imageSrc}
                headerText={firstCard.headerText}
                paragraphText={firstCard.paragraphText}
            />
            <InfoCard
                imageSrc={secondCard.imageSrc}
                headerText={secondCard.headerText}
                paragraphText={secondCard.paragraphText}
            />
        </div>
    );
};

export default InfoCardSection;
