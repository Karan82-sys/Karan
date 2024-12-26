// MoreAboutUs.js
import React, { useState } from 'react';
import './MoreAboutUs.css';

const MoreAboutUs = () => {
    const [showBusinessType, setShowBusinessType] = useState(false);
    const [showSolutionType, setShowSolutionType] = useState(false);
    const [showCloudSolution, setShowCloudSolution] = useState(false);
    const [showIndustry, setShowIndustry] = useState(false);
    
    const businessTypes = [
        'CSP (Cloud Service Provider)',
        'Systems Integrator',
        'Consultant',
        'MSP (Managed Service Provider)',
    ];

    const solutionTypes = [
        'Cloud Solutions',
        'Hybrid Cloud Solutions',
        'CRM Solutions',
        'Cyber Security',
        'On-prem devices Storage and Servers',
        'Telco and 5G Networks',
        'Data and AI',
    ];

    const cloudSolutions = [
        'Azure',
        'Oracle',
        'AWS',
        'Google',
        'IBM',
    ];

    const industriesSupported = [
        'Construction',
        'Education',
        'Government',
        'Healthcare/Pharma',
        'Legal/Accounting',
        'Banking/Finance/Insurance',
        'Manufacturing',
    ];

    return (
        <div className="more-about-us">
            <div className="info-section">
                <h2>More About Us</h2>
                <p>INFORMATION TECHNOLOGY SOLUTIONS THAT WORK FOR YOUR BUSINESS</p>
                <p>Products, Services and Expertise to support and grow your business in the ever-changing world of Technology</p>
                <ul>
                    <li>Cloud Services</li>
                    <li>Cybersecurity</li>
                    <li>Data Recovery and Transmission</li>
                    <li>Financing & Leasing Services</li>
                    <li>IoT Solutions</li>
                    <li>IP and Virtual Telephony</li>
                    <li>IT Hardware and Software</li>
                    <li>Mobility</li>
                    <li>Network Assessment</li>
                    <li>Project Management</li>
                    <li>Telecom</li>
                    <li>Virtual CIO / CTO</li>
                </ul>
            </div>
            <div className="dropdowns-section">
                <Dropdown title="Business Type" options={businessTypes} show={showBusinessType} setShow={setShowBusinessType} />
                <Dropdown title="Solution Types" options={solutionTypes} show={showSolutionType} setShow={setShowSolutionType} />
                <Dropdown title="Cloud Solutions" options={cloudSolutions} show={showCloudSolution} setShow={setShowCloudSolution} />
                <Dropdown title="Industries Supported" options={industriesSupported} show={showIndustry} setShow={setShowIndustry} />
            </div>
        </div>
    );
};

const Dropdown = ({ title, options, show, setShow }) => {
    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setShow(!show)}>
                {title}
            </div>
            {show && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li key={index} className="dropdown-item">{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MoreAboutUs;
