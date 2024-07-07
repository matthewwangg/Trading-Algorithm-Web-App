import React from 'react';
import MetricCard from './MetricCard';
import '../styles/styles.css';

interface MetricCardProps {
    greyText: string;
    headerText: string;
    paragraphText: string;
}

interface MetricCardSectionProps {
    firstCard: MetricCardProps;
    secondCard: MetricCardProps;
    thirdCard: MetricCardProps;
}

const MetricCardSection: React.FC<MetricCardSectionProps> = ({ firstCard, secondCard, thirdCard }) => {
    return (
        <div className="metric-card-section">
            <MetricCard
                greyText={firstCard.greyText}
                headerText={firstCard.headerText}
                paragraphText={firstCard.paragraphText}
            />
            <MetricCard
                greyText={secondCard.greyText}
                headerText={secondCard.headerText}
                paragraphText={secondCard.paragraphText}
            />
            <MetricCard
                greyText={thirdCard.greyText}
                headerText={thirdCard.headerText}
                paragraphText={thirdCard.paragraphText}
            />
        </div>
    );
};

export default MetricCardSection;
