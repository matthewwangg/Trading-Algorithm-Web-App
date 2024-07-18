import React, { useState } from 'react';
import '../styles/styles.css';
import Button from './Button';

const SubscriptionSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        console.log(`Name: ${name}, Email: ${email}`);
    };

    return (
        <div className="subscription-section">
            <div className="subscription-content">
                <h2>Subscribe for Updates</h2>
                <p>Stay updated for our latest predictions.</p>
            </div>
            <div className="subscription-form">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button buttonText="Subscribe" />
            </div>
        </div>
    );
};

export default SubscriptionSection;
