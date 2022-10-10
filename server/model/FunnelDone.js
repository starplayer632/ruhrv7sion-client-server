const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment-timezone');
var date1 = moment().tz("Europe/Berlin").format();

const funnelSchema = new Schema({
    funnelname: {
        type: String,
        required: true
    },
    funnelid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    companyuser: {
        type: String,
        required: true
    },
    createdat: {
        type: String,
        // `Date.now()` returns the current unix timestamp as a number
        default: date1
    },
    //Arrays
    answers: [],
    questions: []
});

module.exports = mongoose.model('FunnelDone', funnelSchema);