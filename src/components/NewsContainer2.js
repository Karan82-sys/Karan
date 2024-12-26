// NewsContainer.js
import React, { useState } from 'react';
import NewsBox from './NewsBox';
import './NewsContainer2.css';

import newsbox7 from '../imagess/NewsBox7.png';
import newsbox8 from '../imagess/NewsBox8.png';
import newsbox9 from '../imagess/NewsBox9.png';
import newsbox10 from '../imagess/NewsBox10.png';
import newsbox11 from '../imagess/NewsBox11.png'; 
import newsbox12 from '../imagess/NewsBox12.png'; // Make sure the path and name are correct


const newsDataSet1 = [
    { image: newsbox7, title: 'Dominos Pizza Enterprises slices identity by role with Microsoft Entra ID' }, // Use the variable here
    { image: newsbox8, title: 'Universidad de Las Palmas de Gran Canaria boosts accessibility with Microsoft Entra ID' },
    { image: newsbox9, title: 'The Total Economic Impact™ Of Microsoft Entra' },
];

const newsDataSet2 = [
    { image: newsbox10, title: 'Reimagining the customer experience with the power of AI' },
    { image: newsbox11, title: 'Manulife supercharges development and reduces costs by 50 percent' },
    { image: newsbox12, title: 'Surface Pro 10' },
];

const NewsContainer2 = () => {
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

export default NewsContainer2;
