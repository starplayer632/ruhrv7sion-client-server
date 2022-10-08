const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment-timezone');
var date1 = moment().tz("Europe/Berlin").format();

const funnelSchema = new Schema({
    funnelname: {
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
    updatedat: {
        type: String,
        // `Date.now()` returns the current unix timestamp as a number
        default: date1
    },
    active: {
        type: Boolean,
        default: false
    },
    //Arrays
    questions: []
});

module.exports = mongoose.model('FunnelConfig', funnelSchema);