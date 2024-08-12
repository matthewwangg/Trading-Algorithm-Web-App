import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import CollaboratorCard from "../components/CollaboratorCard";
import StockGraphCardSection from "../components/StockGraphCardSection";
import WelcomeSection from "../components/WelcomeSection";
import HeaderTextSection from "../components/HeaderTextSection";

const MetricsPage: React.FC = () => {
    const [data, setData] = useState<string>('');

    const firstCollaboratorCard = {
        name: "Matthew Wang",
        role1: "Computer Science",
        role2: "AI/ML Engineering Intern",
        description: "Incoming CS Senior @ ASU",
        buttonText: "View Profile"
    };

    const secondCollaboratorCard = {
        name: "Hari Varshan",
        role1: "Computer Science & Mathematics",
        role2: "Data Science Intern",
        description: "CS and Math Senior @ ASU | XR Developer at METEOR Studios",
        buttonText: "View Profile"
    };

    useEffect(() => {
        axios.get('http://localhost:5000/visualization')
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
            <HeaderTextSection headerText={"Stock Visualizations"} middleText={"Here is where the stock visualizations will go."} buttonText={"See More"}/>
            <StockGraphCardSection headerText={"Placeholder 1"} paragraphText={"Sample Text"}/>
            <StockGraphCardSection headerText={"Placeholder 2"} paragraphText={"Sample Text"}/>

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

export default MetricsPage;
