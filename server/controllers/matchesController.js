const FunnelConfig = require('../model/FunnelConfig');
const User = require('../model/User');
const FunnelDone = require('../model/FunnelDone');
var moment = require('moment-timezone');



const getAllMatches = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;
    //Security check is needed
    try {
        const funneldones = await FunnelDone.find({companyuser}).exec();
        res.json(funneldones);
    } catch (err) {
        console.error(err);
    }    
}


module.exports = {
    getAllMatches
}