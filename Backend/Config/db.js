// import modules
const mongoose = require('mongoose');

// databse connection string
const dbURI = 'mongodb://localhost/chama_app';

// set up mongoose promise to use global promise library
mongoose.Promise = global.Promise;

// lets cnnect to mongodb databse
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to the databse');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

    // lets export the mongoose connection
    module.exports = mongooose.connection;