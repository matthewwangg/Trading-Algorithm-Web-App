import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import ProfileCard from "../components/ProfileCard";
import ProjectSection from "../components/ProjectSection";

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
            <ProfileCard
                name="Matthew Wang"
                role1="Computer Science"
                role2="AI/ML Engineering Intern"
                description="Incoming CS Senior @ ASU"
                contactText="Contact"
                githubText="GitHub"
            />
            <ProjectSection/>
            <ProfileCard
                name="Test"
                role1="?"
                role2="?"
                description="?"
                contactText="Contact"
                githubText="GitHub"
            />
            <ProjectSection/>
            <FooterSection />
        </div>
    );
};

export default AboutPage;
