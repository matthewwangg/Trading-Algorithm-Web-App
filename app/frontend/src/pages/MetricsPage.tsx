import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const MetricsPage: React.FC = () => {
    const [data, setData] = useState<string>('');

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
            <FooterSection />
        </div>
    );
};

export default MetricsPage;
