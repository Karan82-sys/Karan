// NewsBox.js
import React from 'react';
import './NewsBox.css';

const NewsBox = ({ news }) => {
    return (
        <div className="news-box">
            <img src={news.image} alt={news.title} className="news-image" />
            <h3 className="news-title">{news.title}</h3>
        </div>
    );
};

export default NewsBox;
