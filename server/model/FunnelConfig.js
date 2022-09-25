const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    },
    //ArrayOfArrays
    questions: [[]]
    
});

module.exports = mongoose.model('FunnelConfig', funnelSchema);