// import the necessary modules for the app

const passport = require('passport');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User') // should be replaces with user model

// User registration
exports.registration = async (req, res) => {
    try {
        // Handle user registration
        //Ensure to validate and sanitize  user input
        //Return a success response or error message

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
} ;

// User Login
exports.loginUser = (req, res, next) => {
    passport.authenticate('local', { session: false}, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Authentication Failed' });
        }

        req.login(user, { session: false }, (err) => {
            if (err) return next(err);

            //generate JWT token for the user
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

            return res.json({ token });


        });
    })(req, res, next);
};