import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import HeaderSection from "../components/HeaderSection";
import HeaderTextSection from "../components/HeaderTextSection";

const HomePage: React.FC = () => {
    const [data, setData] = useState<string>('');

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
            <HeaderTextSection headerText={"Stock Performance Metrics"} middleText={"Key performance indicators for trading."} buttonText={"View Metrics"}/>
        </div>
    );
};

export default HomePage;
