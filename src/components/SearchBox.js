// SearchBox.js
import React from 'react';
import './SearchBox.css';
import instagram from '../imagess/instagram.png'; // Adjust the path as necessary
import facebook from '../imagess/facebook.png';
import twitter from '../imagess/twitter.png';
import linkedin from '../imagess/linkedin.png';

const SearchBox = () => {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">Search</button>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" className="icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="icon" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" className="icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="icon" />
                </a>
            </div>
        
        
        <button className="request-button">Request Information</button>
    </div>
    );
};

export default SearchBox;
