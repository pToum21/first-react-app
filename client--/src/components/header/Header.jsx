import React from 'react';
import './header.css';

const Header = () => {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        padding: "10px 20px",
    };

    const textContainerStyle = {
        textAlign: "left",
        width: "70%",
        height: "auto",
    };

    const headingStyle = {
        fontSize: "2rem",
        marginBottom: "8px",
    };

    const descriptionStyle = {
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "gray"
    };

    const imgStyle = {
        width: "150px",
        height: "auto",
        boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
        opacity: 0.6,
    };

    return (
        <div className='full-header' style={containerStyle}>
            <div style={textContainerStyle}>
                <h1 className="header-title" style={headingStyle}>View a Car Today!</h1>
                <p className="header-desc" style={descriptionStyle}>Learn About the Newest & Coolest Cars on the market</p>
            </div>
            <img style={imgStyle} src="https://www.shutterstock.com/image-vector/car-shop-shopping-logo-design-260nw-574467076.jpg" alt="buy a car logo" />
        </div>
    );
}

export default Header;