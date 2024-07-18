import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import CollaboratorCard from "../components/CollaboratorCard";
import StockGraphCardSection from "../components/StockGraphCardSection";
import HeaderTextSection from "../components/HeaderTextSection";
import PhotoSection from "../components/PhotoSection";
import PredictionSection from "../components/PredictionSection";
import MetricCard from "../components/MetricCard";
import MetricCardSection from "../components/MetricCardSection";
import HeaderSection from "../components/HeaderSection";
import StockSection from "../components/StockSection";

const PredictionsPage: React.FC = () => {
    const [data, setData] = useState<string>('');

    const stockData = [
        { name: 'MSFT', price: '?' },
        { name: 'GOOGL', price: '?' },
        { name: 'AMZN', price: '?' }
    ];

    const firstCollaboratorCard = {
        name: "Collaborator 1",
        role1: "Role 1",
        role2: "Role 2",
        description: "Description",
        buttonText: "View Profile"
    };

    const secondCollaboratorCard = {
        name: "Collaborator 2",
        role1: "Role 1",
        role2: "Role 2",
        description: "Description",
        buttonText: "View Profile"
    };

    const firstMetricCard = {
        greyText: "Price",
        headerText: "?",
        paragraphText: "?"
    };

    const secondMetricCard = {
        greyText: "Volume",
        headerText: "?",
        paragraphText: ""
    };

    const thirdMetricCard = {
        greyText: "Other",
        headerText: "?",
        paragraphText: ""
    };

    useEffect(() => {
        axios.get('http://localhost:5000/trading-strategy')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <Navbar/>
            <PhotoSection/>
            <PredictionSection/>
            <HeaderTextSection headerText={"Stock Metrics"} middleText={"Key performance indicators for trading."} buttonText={"View More"}/>
            <MetricCardSection firstCard={firstMetricCard} secondCard={secondMetricCard} thirdCard={thirdMetricCard}/>
            <StockGraphCardSection headerText={"Stock Performance"} paragraphText={"Price"}/>
            <HeaderSection headerText={"Available Stocks"} buttonText={"Add Stock"}/>
            <StockSection stocks={stockData}/>
            <SubscriptionSection/>
            <CollaboratorCard
                name={firstCollaboratorCard.name}
                role1={firstCollaboratorCard.role1}
                role2={firstCollaboratorCard.role2}
                description={firstCollaboratorCard.description}
                buttonText={firstCollaboratorCard.buttonText}
            />
            <CollaboratorCard
                name={secondCollaboratorCard.name}
                role1={secondCollaboratorCard.role1}
                role2={secondCollaboratorCard.role2}
                description={secondCollaboratorCard.description}
                buttonText={secondCollaboratorCard.buttonText}
            />
            <FooterSection />
        </div>
    );
};

export default PredictionsPage;
