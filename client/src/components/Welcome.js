import React from "react";
import './CSS/Welcome.css';
import foodImage from '/Users/chirstiangonzalez/Desktop/Projects/fitness-app/client/src/images/food_image.png';
import happyImage from '/Users/chirstiangonzalez/Desktop/Projects/fitness-app/client/src/images/happy-fitness-guy.png';
import fitnessGoalsImage from '/Users/chirstiangonzalez/Desktop/Projects/fitness-app/client/src/images/fitness-goals.png';
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const handleContinue = () => {
        navigate('/register-name');
    };

    return (
        <div className="container">
            <div className = "welcome-page-header">
                <p>Welcome to</p>
                <p className="header" onClick={navigateHome}>TrackMe</p>
            </div>
            <div className="image-container">
                <div className="image-desc">
                    <img src={foodImage} />
                    <p>Simple managable way to log your food </p>
                </div>
                <div className="image-desc">
                    <img src={happyImage} />
                    <p>Create a postive impact on your health</p>
                </div>
                <div className="image-desc">
                    <img src={fitnessGoalsImage} />
                    <p>Track your weight to reach your fitness goals!</p>
                </div>
            </div>
            <div className="button-container">
                    <button onClick={handleContinue}>Continue</button>
            </div>
        </div>
    );
}



export default Welcome;