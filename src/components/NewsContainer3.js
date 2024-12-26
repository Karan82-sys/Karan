// NewsContainer.js
import React, { useState } from 'react';
import NewsBox from './NewsBox';
import './NewsContainer3.css';

import newsbox13 from '../imagess/NewsBox13.png';
import newsbox14 from '../imagess/NewsBox14.png';
import newsbox15 from '../imagess/NewsBox15.png';
import newsbox16 from '../imagess/NewsBox16.png';
import newsbox17 from '../imagess/NewsBox17.png'; 
import newsbox18 from '../imagess/NewsBox18.png'; // Make sure the path and name are correct


const newsDataSet1 = [
    { image: newsbox13, title: 'End the Enterprise Contract Back-and-Forths' }, // Use the variable here
    { image: newsbox14, title: 'DocuSign Insight' },
    { image: newsbox15, title: 'Microsoft Entra' },
];

const newsDataSet2 = [
    { image: newsbox16, title: 'New Technology: The Projected Total Economic Impact™ of Microsoft Intelligent Data Platform' },
    { image: newsbox17, title: 'Total Economic Impact of Dynamics 365 Customer Service' },
    { image: newsbox18, title: 'Microsoft named an overall leader in KuppingerCole Leadership Compass for ITDR' },
];

const NewsContainer3 = () => {
    const [currentNews, setCurrentNews] = useState(newsDataSet1);

    const handleNextNews = () => {
        setCurrentNews(currentNews === newsDataSet1 ? newsDataSet2 : newsDataSet1);
    };

    return (
        <div className="news-container">
            <div className="news-boxes">
                {currentNews.map((news, index) => (
                    <NewsBox key={index} news={news} />
                ))}
                <button className="arrow-button" onClick={handleNextNews}>
                    ➜
                </button>
            </div>
        </div>
    );
};

export default NewsContainer3;
