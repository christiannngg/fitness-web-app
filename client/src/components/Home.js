// Home.js
import React from "react";
import './CSS/Home.css';
import HomeImage from '/Users/chirstiangonzalez/Desktop/Projects/fitness-app/client/src/images/home-icon.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleStartTracking = () => {
        navigate('/welcome');
    };

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content-container">
                    <div className="home-content">
                        <div className="home-content-text">
                            <p className="header">Transform your lifestyle.</p>
                            <p className="description"> Free calorie tracking app to enhance living.</p>
                            <button className="home-button" onClick={handleStartTracking}>Start Tracking</button>
                        </div>
                        <div className="home-image-container">
                            <img src={HomeImage} className="home-image" alt="Home" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
