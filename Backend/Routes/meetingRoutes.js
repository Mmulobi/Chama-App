// Lets import all the necessary modules
const express = require('express');
const router = express.Router();
const meeting = require('../models/Meeting');

// Lets create a route to a new meeting
router.post('/create', async (req, res) => {
    try {
        // handles creation of a new meeting
        // use req.body to access data from requests
        // ensure validaion and sanitization of data
        // save the meeting on a database
        // return a sucess or error message
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// route to get list of all meetings
router.get('/all', async (req, res) => {
    try {
        // retrieve all meetings from database
        const meetings = await meeting.find();
        res.json(meetings);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;