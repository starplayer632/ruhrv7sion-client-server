const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401); //If no such HEader -> unauthorised
    console.log(authHeader); // Bearer token
    const token = authHeader.split(' ')[1]; //just to get the token
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token -> forbidden
            req.user = decoded.username;
            next();
        }
    );
}

module.exports = verifyJWT