import React from 'react';
import '../styles/styles.css';

const ProjectSection: React.FC = () => {
    return (
        <div className="project-section">
            <div className="project-content">
                <h2 className="project-header">Previous Project</h2>
                <p className="project-description">Check out some past work.</p>
                <div className="project-details">
                    <div className="project-detail">
                        <div className="circle"></div>
                        <div className="detail-text">
                            <h3>Project Name 1</h3>
                            <p>Project Description 1</p>
                            <p>Year</p>
                        </div>
                    </div>
                    <div className="project-detail">
                        <div className="circle"></div>
                        <div className="detail-text">
                            <h3>Project Name 2</h3>
                            <p>Project Description 2</p>
                            <p>Year</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-image">
                <img src="#" alt="" className="image-placeholder" />
            </div>
        </div>
    );
};

export default ProjectSection;
