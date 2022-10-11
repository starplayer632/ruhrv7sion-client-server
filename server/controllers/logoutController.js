const User = require('../model/User');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //succesful but No content to sent back
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
       // console.log("!foundUser: clearCookie");
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //delete cookie //JUST PRODCUTION!!! uses https!!!
        //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
        return res.sendStatus(204); //succesful but No content to sent back
        
    }

     // Delete refreshToken in db
     foundUser.refreshToken = foundUser.refreshToken.filter(rt => rt !== refreshToken);
     const result = await foundUser.save();
    //console.log(" Delete refreshToken in db: clearCookie");
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //JUST PRODCUTION!!! uses https!!!
    //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
    res.sendStatus(204); //succesful but No content to sent back
}

module.exports = { handleLogout }