// lets import the necessary modules
const mongoose = require('mongoose');

// lets define the member schema

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },

});

// lets create the member model
const Member = mongoose.model('Member', memberSchema);

// now lets export the Member model
module.exports = Member;