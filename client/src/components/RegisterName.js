import React from "react";
import './CSS/RegisterName.css';
import { useNavigate } from "react-router-dom";

const RegisterName = () => {

    const navigate = useNavigate();

    const handleNextButton = () => {
        console.log("Next page");
    }

    const handleBackButton = () => {
        navigate('/welcome');
    }
    
    return (
        <div className="register-name-container">
            <form>
                <h1>Enter your first name</h1>
                <p className="register-desc">We are happy you're tracking with us!</p>
                <input
                type="text"
                placeholder="First Name"
                required
                />
                <div className="button-containers">
                    <button className="back-button" onClick={handleBackButton}>BACK</button>
                    <button onClick={handleNextButton} className="next-button">NEXT</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterName;