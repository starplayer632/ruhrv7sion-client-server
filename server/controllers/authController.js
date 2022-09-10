const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});
const fsPromises = require('fs').promises; // cause simple json files isntead of servers
const path = require('path');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        // create JWTs
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' } //production 5min or 15 min
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' } //much longer eg 1h
        );
        // Saving refreshToken with current user
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'models', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        //res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); //httpONLY not avaiable to javascript //24hours //name is jwt
        //TESTING 
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken }); //needs to bestored in local memory beacause if it s written in JS everyone could acces it using JS

        // just for testing: res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };