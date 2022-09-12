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
    questions: {
        question: {
            id: Number,
            typ: Number,
            question: String,
            grading: String,
        },
    },
    createdat: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    }
});

module.exports = mongoose.model('Funnel', funnelSchema);