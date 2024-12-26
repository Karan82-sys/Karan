// PartneronHeader.js
import React, { useState } from 'react';
import './PartneronHeader.css';

const PartneronHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="partneron-header">
            <div className="partneron-text">PartnerOn</div>
            <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">
                     Your Content ▼
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">Search History</div>
                        <div className="dropdown-item">Favorites</div>
                    </div>
                )}
            </div>
            <div className="sign-in">Sign In</div>
        </div>
    );
};

export default PartneronHeader;
