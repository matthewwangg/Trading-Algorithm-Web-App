import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import HeaderSection from "../components/HeaderSection";
import HeaderTextSection from "../components/HeaderTextSection";
import InfoCardSection from "../components/InfoCardSection";
import MetricCardSection from "../components/MetricCardSection";
import StockGraphCardSection from "../components/StockGraphCardSection";
import FooterSection from "../components/FooterSection";
import CollaboratorCard from "../components/CollaboratorCard";

const HomePage: React.FC = () => {
    const [data, setData] = useState<string>('');

    const firstCard = {
        imageSrc: "", // Replace with your image path or URL
        headerText: "MSFT",
        paragraphText: "Nothing yet."
    };

    const secondCard = {
        headerText: "GOOG",
        paragraphText: "Nothing yet."
    };

    const firstMetricCard = {
        greyText: "ROI",
        headerText: "?",
        paragraphText: "Unknown"
    };

    const secondMetricCard = {
        greyText: "Volume",
        headerText: "?",
        paragraphText: ""
    };

    const thirdMetricCard = {
        greyText: "P/E Ratio",
        headerText: "?",
        paragraphText: ""
    };

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

    useEffect(() => {
        axios.get('http://localhost:5000/')
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
            <WelcomeSection/>
            <HeaderSection headerText={"Predictions History"} buttonText={"View All"} />
            <InfoCardSection firstCard={firstCard} secondCard={secondCard}/>
            <HeaderTextSection headerText={"Stock Performance Metrics"} middleText={"Key performance indicators for trading."} buttonText={"View Metrics"}/>
            <MetricCardSection firstCard={firstMetricCard} secondCard={secondMetricCard} thirdCard={thirdMetricCard}/>
            <StockGraphCardSection headerText={"Stock Name"} paragraphText={"Current Value"}/>
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

export default HomePage;
