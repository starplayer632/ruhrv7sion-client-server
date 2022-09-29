const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401); //If no such HEader AND starts with Bearer -> unauthorised
    const token = authHeader.split(' ')[1]; //just to get the token
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token -> forbidden
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

module.exports = verifyJWT