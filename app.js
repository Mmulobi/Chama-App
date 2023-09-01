// import module
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('./config/db');
const memberRoutes = require('./routes/memberRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const meetingRoutes = require('./routes/meetingRoutes');

// create express app
const app = express();

//middleware for parsing JSON requests
app.use(bodyParser.json());

// set up session management
app.use(
    session({
        secret: 'Fuck marriage life',
        resave: 'false',
        saveUninitialized: false,
    })
);

// initialzie passport and set it up for session management
app.use(passport.initialize());
app.use(passport.session());

// import and configure passport
require('./config/passport');

// connect to database
db.on('error', console.error.bind(console, 'Dtabse connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

// Routes
app.use('./api/members', memberRoutes);
app.use('./api/transactions', transactionRoutes);
app.use('./api/meetings', meetingRoutes);

// start the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
