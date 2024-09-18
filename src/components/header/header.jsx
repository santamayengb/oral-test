import React from 'react';
import './header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="src/assets/horizontal-logo.png" alt="Logo" />
            </div>

            <h1 style={{ color: '#4490C4', }}>Oral Drug Test</h1>
            <div className="circle-div">
            <img src="src/assets/dp.png"/>
            </div>


        </header>
    );
};

export default Header;
