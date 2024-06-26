import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [data, setData] = useState('');

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
            <h1>Home Page</h1>
            <p>{data}</p>
        </div>
    );
};

export default HomePage;
