// lets start by importing all the necessary modules
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// create a route to a new transaction
router.post('/create', async (req, res) => {
    try {
        // handle creating a transaction here
        // use req.body to access data sent in request
        // ensure data is validated and sanitized
        //save the transaction to database
        // return a success or error message
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// route to get all transactions
 router.get('/all', async (req, res) => {
    try {
        // retrieve and return all transactions from the database
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
 });

 module.exports = router;
