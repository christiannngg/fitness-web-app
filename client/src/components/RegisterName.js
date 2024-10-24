import React, { useState } from "react";
import './CSS/RegisterName.css';
import { useNavigate } from "react-router-dom";

const RegisterName = () => {
    const [firstName, setFirstName] = useState("");     // Value of input field.
    const [error, setError] = useState(false);             // Tracks whether input is empty and should show an error
    const navigate = useNavigate();     


    const handleNextButton = (e) => {
        e.preventDefault(); 

        // If the name is empty set red border. 
        if(firstName.trim() === "") {
            setError(true);
        } else {
            setError(false);
            console.log("next page.")       // Handle navigation to next page
        }
    }

    const handleBackButton = (e) => {
        e.preventDefault();
        navigate('/welcome');       // Goes back to previous page
    }
    
    return (
        <div className="register-name-container">
            <form className="register-form">
                <h1 className="register-header">Enter your first name</h1>
                <p className="register-desc">We are happy you're tracking with us!</p>
                <input id="first-name-input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={error ? 'input-error' : ''}
                />
                {error && <p className="error-message">Please enter a first name.</p>}
                <div className="button-containers">
                    <button className="back-button" onClick={handleBackButton}>BACK</button>
                    <button onClick={handleNextButton} className="next-button">NEXT</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterName;