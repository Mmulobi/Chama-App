// lets import the necessary module

const mongoose = require('mongoose');

//lets define the transacion schema
const transactionSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    amount: {
        type: Number,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

});

// lets create the transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

// Lets export the transaction model
module.exports = Transaction;