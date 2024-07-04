import React from 'react';
import '../styles/styles.css';

interface ButtonProps {
    buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <button className="centered-button">
            {buttonText}
        </button>
    );
};

export default Button;
