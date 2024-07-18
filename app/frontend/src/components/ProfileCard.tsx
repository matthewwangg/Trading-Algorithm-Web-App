import React from 'react';
import '../styles/styles.css';

interface ProfileCardProps {
    name: string;
    role1: string;
    role2: string;
    description: string;
    contactText: string;
    githubText: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role1, role2, description, contactText, githubText }) => {
    return (
        <div className="profile-card">
            <div className="profile-photo"></div>
            <div className="profile-content">
                <div className="profile-info">
                    <h2>{name}</h2>
                    <div className="profile-roles">
                        <span className="role-box">{role1}</span>
                        <span className="role-box">{role2}</span>
                    </div>
                    <p>{description}</p>
                </div>
                <div className="profile-buttons">
                    <button className="contact-button">{contactText}</button>
                    <button className="github-button">{githubText}</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
