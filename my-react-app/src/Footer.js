import React from 'react';
import "./App.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} MovieLand</p>
                <p>#TechBabyGirl# -- All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
