import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'; 
import Welcome from './components/Welcome'; 
import Layout from './components/Layout';
import RegisterName from './components/RegisterName';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/register-name" element={<RegisterName/>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
