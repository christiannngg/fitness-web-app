// Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import UserIcon from '/Users/chirstiangonzalez/Desktop/Projects/fitness-app/client/src/images/UserIcon.png'; 
import './CSS/Navbar.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <nav>
            <div className="navbar-container">
                <p  onClick={navigateHome}>TrackMe</p> 
                <div className="navbar-links">
                    <ul>
                        <li><a href="#methodology">Methodology</a></li> {/* Use anchor link for methodology */}
                        <li><a href="#about">About</a></li> {/* Use anchor link for about */}
                        <li><a href="#support">Support</a></li> {/* Use anchor link for support */}
                    </ul>
                    <img src={UserIcon} onClick={navigateLogin} className="login-icon" alt="User Icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
