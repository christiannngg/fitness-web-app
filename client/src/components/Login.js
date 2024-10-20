import React, { useState } from "react";
import axios from "axios";
import './CSS/Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/auth/login', {
                username,
                password,
            });
            //Handle successful login (e.g. store token, redirect user)
            localStorage.setItem('token', response.data.token);
            console.log("Login successful", response.data);

        } catch (error) {
            console.error("Login failed", error.response.data)
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        console.log("User logged out."); 

        // Redirect to home or login page. 
        window.location.href = '/login';  // Change login route 
    }

    const handleRegisterClick = () => { 
        navigate('/welcome');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleLogin} >
                <div className="form-content">
                    <h1>Welcome back!</h1>

                    <input className="username-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                    />
                    <input className= "password-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        />
                    <p className="forgot-password" >Forgot Password? </p>
                    <button type="submit" className="login-button">Login</button>
                    <p>or</p>
                    <button type="button" className="register-button" onClick={handleRegisterClick} >Register</button>
                     {/* <button type="button" onClick={handleLogout}>Logout</button> */}
                </div>
            </form>
        </div>
    );    
};

export default Login; 