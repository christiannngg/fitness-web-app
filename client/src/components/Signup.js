import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // validate password function

    const validatePassword = (password) => {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; 
        const hasUpperCase = /[A-Z]/; 

        if (password.length < minLength) {
            return `Password must be ${minLength} characters long.`
        }
        if (!hasNumber.test(password)) {
            return 'Password must contain at least one number.';
        }
        if (!hasSpecialChar.test(password)) {
            return 'Password must contain a special character.';
        }
        if (!hasUpperCase.test(password)) {
            return 'Password must contain an upper case.';
        }
        return '';      // returns empty string if password is valid. 
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        // validate if password is acceptable
        const passwordError = validatePassword(password);
        if (passwordError) {
            setErrorMessage(passwordError);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/api/auth/register', {
                username,
                email,
                password,
            });
            console.log("Signup successful:", response.data);
            // Redirect to login or home page after signup
            window.location.href = '/login'; // Change to your desired route
        } catch (error) {
            if (error.response) {
                console.error("Signup failed:", error.response.data);
                setErrorMessage(error.response.data); // Display alert with the error message
            } else {
                console.error("Signup failed:", error.message);
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete='username'
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value);
                    setErrorMessage('');
                }}
                required
                autoComplete='email'
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value);
                    setErrorMessage('');
                }}
                required
                autoComplete="new-password" // Add autocomplete attribute
            />
            <button type="submit">Sign Up</button>
            {errorMessage && <p style={{ color:"black" }}>{errorMessage}</p>}
        </form>
    );
};

export default Signup;
