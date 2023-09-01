// import trhe neccesary modules
const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const Member = require('../models/Member');

//Route to create a new member
router.post('/create', async (req, res) => {
try {
    // lets handle creating a  new member
    // req.body is used to access data sent in the request
    // lets ensure data is validated and sanitzed
    // save the member to the database
    // return a success or error message
} catch (error) {
    res.status(500).json({ error: 'Internal server error' });
}
});

//route to get all members
router.get('/all', async (req, res) => {
    try {
        // lets retrieve and return all members from the database
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;