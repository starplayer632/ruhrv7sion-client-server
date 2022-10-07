const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    companyuser: {
        type: String,
        required: true
    },
    createdat: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    },
    updatedat: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    },
    companyname: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    timeweekly: {
        type: Number,
        required: true
    },
    money: {
        type: Number,
        required: true
    },
    textworktogether: {
        type: String,
        required: true
    },
    textexpectations: {
        type: String,
        required: true
    },
    funnelstodisplay: []
});

module.exports = mongoose.model('Joboffer', cardSchema);