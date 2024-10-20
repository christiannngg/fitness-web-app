const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const router = express.Router(); 

//registration route 

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body; 

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).send('User already exists.');

        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).send('Email already exists.');

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // successful register message 
        res.status(201).send('New user has been created.');
    } catch (err) {
        res.status(400).send(err.message);
    }

});

//login route

router.post('/login', async (req, res) => {
    const { username, password } = req.body; 

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//protected route

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) return res.status(403).send('Token is required for authentication');
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("invalid token");
        req.userId = decoded.id; //access user id from token payload
        next(); 
    });
};

router.get('/protected', verifyToken, (req, res) => {
    res.status(200).send("This is a protected route.")
})


// test route to see if api is working
router.get('/', (req, res) => {
    res.send('Auth API is working!');
});


module.exports = router; 

// registration endpoint


//steve new password