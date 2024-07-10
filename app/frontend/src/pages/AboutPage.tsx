import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const AboutPage: React.FC = () => {
    const [data, setData] = useState<string>('');

    useEffect(() => {
        axios.get('http://localhost:5000/about')
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
            <h1>About Page</h1>
            <p>{data}</p>
            <FooterSection />
        </div>
    );
};

export default AboutPage;
