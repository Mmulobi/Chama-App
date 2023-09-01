// lets import the necessary mmodule
const mongoose = require('mongoose');

// lets define the meeting schema
const meetingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
    },
    attendees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
    },
});

// lets create the meeting model
const Meeting = mongoose.model('Meeting', neetingSchema);

//Lets export he meeting module
module.exports = Meeting;