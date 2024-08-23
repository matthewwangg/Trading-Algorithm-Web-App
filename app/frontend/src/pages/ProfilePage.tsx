import React from 'react';
import '../styles.css';
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

const ProfilePage: React.FC = () => {
    return (
        <div className="profile-page-container">
            <Navbar/>
            <ProfileCard
                name="Matthew Wang"
                role1="Computer Science"
                role2="AI/ML Engineering Intern"
                description="Incoming CS Senior @ ASU"
                contactText="Contact"
                githubText="GitHub"
            />
        </div>
    );
};

export default ProfilePage;
