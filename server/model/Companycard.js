const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    companyuser: {
        type: String,
        required: true,
        unique: true
    },
    createdat: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    },
    companyname: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    visionstatement: {
        type: String,
        required: true
    },
    infotext: {
        type: String,
        required: true
    },
    funnelstodisplay: []
});

module.exports = mongoose.model('Companycard', cardSchema);