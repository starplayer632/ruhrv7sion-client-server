const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
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
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number,
        StudentUser: Number,
        CompanyUser: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: [String]
});

module.exports = mongoose.model('User', userSchema);