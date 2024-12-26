// App.js
import React from 'react';
import HeaderBox from './components/HeaderBox';
import LogoHeader from './components/LogoHeader';
import PartneronHeader from './components/PartneronHeader'; 
import SearchBox from './components/SearchBox';
import NewsContainer from './components/NewsContainer';
import NewsContainer2 from './components/NewsContainer2';
import NewsContainer3 from './components/NewsContainer3'; // Import the new component
import MoreAboutUs from './components/MoreAboutUs';

const App = () => {
    return (
        <div>
            <HeaderBox />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <LogoHeader />
                <PartneronHeader />
            </div>
            <SearchBox />
            <NewsContainer /> {/* Add the news container */}
            <NewsContainer2/>
            <NewsContainer3/>
            <MoreAboutUs/>
        </div>
    );
};

export default App;
