const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) { this.users = data }
}
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = (req, res) => {
    const cookies = req.cookies; //get all cokies which are sent with it
    if (!cookies?.jwt) return res.sendStatus(401); //if cokkies and if yes do we have a jwt? No -> Unauthorized
    const refreshToken = cookies.jwt;

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) return res.sendStatus(403); //No such User-> Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403); // Something false -> Forbidden
            const accessToken = jwt.sign(
                { "username": decoded.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' } //30s just for testing
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { handleRefreshToken }