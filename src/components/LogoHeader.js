// LogoHeader.js
import React from 'react';
import './LogoHeader.css';
import logo from '../imagess/image.png'; // Ensure the logo path is correct

const LogoHeader = () => {
    return (
        <div className="logo-header">
            <img src={logo} alt="Logo" className="logo" />
            <div className="text">
                <h1> WORLD WIRELESS</h1>
                <h1> TECHNOLOGY INC.</h1>
            </div>
        </div>
    );
};

export default LogoHeader;
