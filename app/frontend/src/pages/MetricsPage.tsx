import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import SubscriptionSection from "../components/SubscriptionSection";
import CollaboratorCard from "../components/CollaboratorCard";

const MetricsPage: React.FC = () => {
    const [data, setData] = useState<string>('');

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
            <h1>Visualization Page</h1>
            <p>{data}</p>
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
