// NewsContainer.js
import React, { useState } from 'react';
import NewsBox from './NewsBox';
import './NewsContainer.css';

import newsbox from '../imagess/NewsBox1.png';
import newsbox2 from '../imagess/NewsBox2.png';
import newsbox3 from '../imagess/NewsBox3.png';
import newsbox4 from '../imagess/NewsBox4.png';
import newsbox5 from '../imagess/NewsBox5.png'; 
import newsbox6 from '../imagess/NewsBox6.png'; // Make sure the path and name are correct


const newsDataSet1 = [
    { image: newsbox, title: 'Microsoft Incident Response tips for managing a mass password reset' }, // Use the variable here
    { image: newsbox2, title: 'Copilot in Customer Service' },
    { image: newsbox3, title: 'Build and Modernize Intelligent Apps' },
];

const newsDataSet2 = [
    { image: newsbox4, title: 'A New AI era at work' },
    { image: newsbox5, title: 'The Microsoft Intelligent Data Platform — Unleash your data and accelerate your transformation' },
    { image: newsbox6, title: 'Build and Modernize Intelligent Apps' },
];

const NewsContainer = () => {
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

export default NewsContainer;
