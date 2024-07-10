import React from 'react';
import '../styles/styles.css';

interface CollaboratorCardProps {
    name: string;
    role1: string;
    role2: string;
    description: string;
    buttonText: string;
}

const CollaboratorCard: React.FC<CollaboratorCardProps> = ({ name, role1, role2, description, buttonText }) => {
    return (
        <div className="collaborator-card">
            <div className="collaborator-photo"></div>
            <div className="collaborator-content">
                <div className="collaborator-info">
                    <h2>{name}</h2>
                    <div className="collaborator-roles">
                        <span className="role-box">{role1}</span>
                        <span className="role-box">{role2}</span>
                    </div>
                    <p>{description}</p>
                </div>
                <button className="view-profile-button">{buttonText}</button>
            </div>
        </div>
    );
};
export default CollaboratorCard;
