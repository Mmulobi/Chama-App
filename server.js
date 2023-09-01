// import modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('./Config/db');
const memberRoutes = require('./routes/memberRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const meetingRoutes = require('./routes/meetingRoutes');

// create express app
const app = express();

//middlware for parsing json requests
app.use(bodyParser.json());

// set up session management
app.use(
    session({
        secret: 'fuck this marriage',
        resave: false,
        saveUninitialized: false,
    })
);

// initialized passport and session management is set up
app.use(passport.initialize());
app.use(passport.session());

// Import annd configure pasport
require('./config/pasport');

// connect to database
db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
    console.log('connected to database');
});

// Routes
app.use('/api/members', memberRoutes); // Member routes
app.use('/api/transactions', transactionRoutes); // Transaction routes
app.use('/api/meetings', meetingRoutes); // Meeting routes

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});